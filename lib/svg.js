import { buildSnakePath, getRank, GRID, PATH_LEN } from "./snake.js";

const { X: GX, Y: GY, COLS, ROWS, STEP, CELL } = GRID;

const SVG_W = GX + COLS * STEP + GX;      // 719
const SVG_H = GY + ROWS * STEP + 58;      // 204

const SNAKE_LEN  = 130;                    // body visible segment (px)
const TRAIL1_LEN = 260;                    // inner trail length
const TRAIL2_LEN = 390;                    // outer trail length
const ANIM_DUR   = 30;                     // seconds for one full loop
const SPEED      = PATH_LEN / ANIM_DUR;   // ≈ 160.33 px/s
// Time for head to lead the snake body by SNAKE_LEN pixels
const HEAD_ADV   = +(SNAKE_LEN / SPEED).toFixed(3); // ≈ 0.811s

// dasharray uses (PATH_LEN - len) as gap so period = PATH_LEN → seamless looping
const da = len => `${len} ${PATH_LEN - len}`;

function glowFilter(id, b1, b2, b3 = 0) {
  const blurs = [[b1, "b1"], [b2, "b2"], ...(b3 > 0 ? [[b3, "b3"]] : [])];
  const nodes  = blurs.map(([v, r]) => `<feGaussianBlur in="SourceGraphic" stdDeviation="${v}" result="${r}"/>`).join("");
  const merges = [...(b3 > 0 ? ["b3"] : []), "b2", "b1", "SourceGraphic"]
    .map(n => `<feMergeNode in="${n}"/>`).join("");
  return `<filter id="${id}" x="-150%" y="-150%" width="400%" height="400%">${nodes}<feMerge>${merges}</feMerge></filter>`;
}

function hexPoly(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}

function animate(begin) {
  return `<animate attributeName="stroke-dashoffset" from="0" to="-${PATH_LEN}" dur="${ANIM_DUR}s" repeatCount="indefinite" calcMode="linear" begin="${begin}"/>`;
}

function buildSnakeLayers(users) {
  const N = users.length;
  let defs = "";
  let layers = "";

  for (let i = 0; i < N; i++) {
    const { color, username } = users[i];
    // Phase offset so each user's snake is staggered evenly around the loop
    const p = (i * ANIM_DUR) / N;

    // Using (-(p + ANIM_DUR - lag)) keeps all begin values negative → no initial-state glitch.
    // Negative begin in SMIL means "animation has already been running for |begin| seconds."
    const mBegin  = `${-p}s`;
    const t1Begin = `${-(p + ANIM_DUR - 1)}s`;   // 1s lag = 29s into previous cycle
    const t2Begin = `${-(p + ANIM_DUR - 2)}s`;   // 2s lag = 28s into previous cycle
    const hBegin  = `${-(p + HEAD_ADV)}s`;        // head is SNAKE_LEN px ahead of body

    defs += glowFilter(`g${i}`,  1.5, 5);       // snake + trail glow (tight neon)
    defs += glowFilter(`gh${i}`, 2.5, 8, 16);  // head glow (dramatic flare)

    layers += `
  <!-- snake: ${username} color:${color} -->
  <path fill="none" stroke="${color}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${da(TRAIL2_LEN)}" stroke-opacity="0.09" filter="url(#g${i})">${animate(t2Begin)}</path>
  <path fill="none" stroke="${color}" stroke-width="6"  stroke-linecap="round" stroke-dasharray="${da(TRAIL1_LEN)}" stroke-opacity="0.20" filter="url(#g${i})">${animate(t1Begin)}</path>
  <path fill="none" stroke="${color}" stroke-width="3"  stroke-linecap="round" stroke-dasharray="${da(SNAKE_LEN)}"  filter="url(#g${i})">${animate(mBegin)}</path>
  <circle r="5.5" fill="${color}" filter="url(#gh${i})"><animateMotion dur="${ANIM_DUR}s" repeatCount="indefinite" calcMode="linear" begin="${hBegin}"><mpath xlink:href="#sp"/></animateMotion></circle>`;
  }

  return { defs, layers };
}

function buildRankBadge(rank, theme, defsOut) {
  const rbx = SVG_W - 38, rby = 27;
  defsOut.push(glowFilter("hf", 1, 4));

  let fillDef = "";
  const fillId = `rbf${rank.tier}`;
  if (rank.tier === 5) {
    fillDef = `<linearGradient id="${fillId}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#ff0000"><animate attributeName="stop-color" values="#ff0000;#ff8800;#ffff00;#00ee88;#0088ff;#ff00ff;#ff0000" dur="4s" repeatCount="indefinite"/></stop>
      <stop offset="100%" stop-color="#ff00ff"><animate attributeName="stop-color" values="#ff00ff;#ff0000;#ff8800;#ffff00;#00ee88;#0088ff;#ff00ff" dur="4s" repeatCount="indefinite"/></stop>
    </linearGradient>`;
    defsOut.push(fillDef);
  }

  const polyFill = rank.tier === 5 ? `url(#${fillId})` : rank.bg;
  const strokeAnim = rank.tier === 5
    ? `<animate attributeName="stroke" values="${rank.glow};#ffff00;#00ff88;${rank.glow}" dur="4s" repeatCount="indefinite"/>`
    : "";

  return `<polygon points="${hexPoly(rbx, rby, 22)}" fill="${polyFill}" stroke="${rank.glow}" stroke-width="1.5" filter="url(#hf)">${strokeAnim}</polygon>
  <text x="${rbx}" y="${rby - 5}" text-anchor="middle" fill="${rank.color}" font-size="6.8" font-family="monospace" font-weight="bold">${rank.name}</text>
  <text x="${rbx}" y="${rby + 9}" text-anchor="middle" fill="${rank.color}" font-size="10"  font-family="monospace">${rank.symbol}</text>`;
}

export function renderSVG(users, theme) {
  const primary = users[0];
  const rank = getRank(primary.total);
  const snakePath = buildSnakePath(GX, GY);

  // Heatmap cells from primary user's contribution data
  const cellMap = new Map(primary.cells.map(c => [`${c.col},${c.row}`, c.level]));
  let heatmap = "";
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const lvl = Math.min(cellMap.get(`${c},${r}`) ?? 0, theme.levels.length - 1);
      heatmap += `<rect x="${GX + c * STEP}" y="${GY + r * STEP}" width="${CELL}" height="${CELL}" rx="2" fill="${theme.levels[lvl]}"/>`;
    }
  }

  // Snake animation layers
  const { defs: snakeDefs, layers } = buildSnakeLayers(users);

  // Rank badge
  const extraDefs = [];
  const badge = buildRankBadge(rank, theme, extraDefs);

  // Header
  let header = "";
  if (users.length === 1) {
    header = `<text x="15" y="27" font-size="16" fill="${theme.text}" font-family="monospace" font-weight="bold">@${primary.username}</text>
  <text x="15" y="43" font-size="10" fill="${theme.muted}" font-family="monospace">GitHub Contributions · ${new Date().getFullYear()}</text>`;
  } else {
    header = `<text x="15" y="22" font-size="13" fill="${theme.text}" font-family="monospace" font-weight="bold">Multi-User Snake</text>`;
    users.forEach((u, i) => {
      header += `\n  <circle cx="${18 + i * 115}" cy="38" r="5" fill="${u.color}"/>`;
      header += `\n  <text x="${28 + i * 115}" y="42" font-size="10" fill="${theme.text}" font-family="monospace">@${u.username}</text>`;
    });
  }

  // Stats footer
  const statsY1 = GY + ROWS * STEP + 14;
  const statsY2 = statsY1 + 17;
  const items = [
    { label: "TOTAL",   value: primary.total.toLocaleString(),       color: theme.text },
    { label: "STREAK",  value: `${primary.streak}d`,                  color: theme.text },
    { label: "LONGEST", value: `${primary.longestStreak}d`,           color: theme.text },
    { label: "RANK",    value: rank.name,                             color: rank.color },
  ];
  const colW = SVG_W / items.length;
  const stats = items.map((s, i) => {
    const x = (colW * i + colW / 2).toFixed(0);
    return `<text x="${x}" y="${statsY1}" text-anchor="middle" font-size="8"  fill="${theme.muted}" font-family="monospace">${s.label}</text>
  <text x="${x}" y="${statsY2}" text-anchor="middle" font-size="13" fill="${s.color}" font-family="monospace" font-weight="bold">${s.value}</text>`;
  }).join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${SVG_W}" height="${SVG_H}" viewBox="0 0 ${SVG_W} ${SVG_H}">
<defs>
  ${extraDefs.join("\n  ")}
  ${snakeDefs}
</defs>
<rect width="${SVG_W}" height="${SVG_H}" fill="${theme.bg}" rx="8"/>
<rect width="${SVG_W}" height="${SVG_H}" fill="none" stroke="${theme.border}" stroke-width="1" rx="8" opacity="0.7"/>
${header}
${badge}
<g>${heatmap}</g>
<path id="sp" d="${snakePath}" fill="none" stroke="none"/>
${layers}
${stats}
</svg>`;
}
