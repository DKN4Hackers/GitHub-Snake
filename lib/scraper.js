import fetch from "node-fetch";

export async function getContributions(username) {
  const url = `https://github.com/users/${username}/contributions`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 GitHub-Snake-Bot", "X-Requested-With": "XMLHttpRequest" },
  });
  if (!res.ok) throw new Error(`GitHub ${res.status} for ${username}`);
  const html = await res.text();

  // Try <td> (new GitHub format) then <rect> (legacy SVG format)
  const cells = [];
  const seen = new Set();
  const patterns = [
    /<td[^>]+data-date="(\d{4}-\d{2}-\d{2})"[^>]+data-level="(\d)"/g,
    /<rect[^>]+data-date="(\d{4}-\d{2}-\d{2})"[^>]+data-level="(\d)"/g,
    /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g,
  ];
  for (const re of patterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(html)) !== null) {
      if (!seen.has(m[1])) {
        seen.add(m[1]);
        cells.push({ date: m[1], level: parseInt(m[2]) });
      }
    }
    if (cells.length > 50) break;
  }

  cells.sort((a, b) => a.date.localeCompare(b.date));

  const tm = html.match(/([\d,]+)\s+contribution/i);
  const total = tm ? parseInt(tm[1].replace(/,/g, "")) : cells.filter(c => c.level > 0).length;

  const firstDate = cells.length ? new Date(cells[0].date + "T12:00:00Z") : new Date();
  const gridCells = cells.map(cell => {
    const d = new Date(cell.date + "T12:00:00Z");
    const days = Math.round((d - firstDate) / 86400000);
    return { col: Math.floor(days / 7), row: d.getUTCDay(), level: cell.level, date: cell.date };
  });

  let streak = 0;
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i].level > 0) streak++;
    else break;
  }

  let longest = 0, run = 0;
  for (const c of cells) {
    run = c.level > 0 ? run + 1 : 0;
    if (run > longest) longest = run;
  }

  return { cells: gridCells, total, streak, longestStreak: longest };
}
