import { getContributions } from "../lib/scraper.js";
import { themes } from "../lib/themes.js";
import { renderSVG } from "../lib/svg.js";
import { cacheGet, cacheSet } from "../utils/cache.js";

export default async function handler(req, res) {
  const { theme: themeName = "dark", username, users: usersParam } = req.query;

  // Support ?username=abc (single) or ?users=abc,def,xyz (multi, max 4)
  const names = usersParam
    ? usersParam.split(",").map(u => u.trim()).filter(Boolean).slice(0, 4)
    : username
    ? [username.trim()]
    : [];

  if (!names.length) {
    return res.status(400).send("Missing ?username=<name> or ?users=<name1>,<name2>");
  }

  const theme = themes[themeName] || themes.dark;
  const cacheKey = `${names.join("+")}::${themeName}`;
  const cached = cacheGet(cacheKey);
  if (cached) {
    res.setHeader("Content-Type", "image/svg+xml");
    return res.send(cached);
  }

  try {
    const results = await Promise.all(names.map(getContributions));

    const users = results.map((data, i) => ({
      username: names[i],
      color: theme.snakeColors[i % theme.snakeColors.length],
      ...data,
    }));

    const svg = renderSVG(users, theme);
    cacheSet(cacheKey, svg);

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.send(svg);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error: ${err.message}`);
  }
}
