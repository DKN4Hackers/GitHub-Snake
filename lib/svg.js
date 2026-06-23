import { buildSnakePath, getRank, GRID, PATH_LEN } from "./snake.js";

const { X: GX, Y: GY, COLS, ROWS, STEP, CELL } = GRID;

const SVG_W = GX + COLS * STEP + GX;      // 719
const SVG_H = GY + ROWS * STEP + 58;      // 204

const SNAKE_LEN  = 130;
const TRAIL1_LEN = 260;
const TRAIL2_LEN = 390;
const TRAIL3_LEN = 520;                    // particle trail — outermost layer
const ANIM_DUR   = 30;
const SPEED      = PATH_LEN / ANIM_DUR;
const HEAD_ADV   = +(SNAKE_LEN / SPEED).toFixed(3);

const da = len => `${len} ${PATH_LEN - len}`;

// Rainbow cycle used for legendary_ultimate + animatedSnake themes
const RAINBOW = ["#ff0066","#ff8800","#ffff00","#00ff88","#0088ff","#aa00ff","#ff00aa","#ff0066"];

// ─── SVG filter helpers ──────────────────────────────────────────────────────

function glowFilter(id, b1, b2, b3 = 0) {
  const blurs = [[b1, "b1"], [b2, "b2"], ...(b3 > 0 ? [[b3, "b3"]] : [])];
  const nodes  = blurs.map(([v, r]) => `<feGaussianBlur in="SourceGraphic" stdDeviation="${v}" result="${r}"/>`).join("");
  const merges = [...(b3 > 0 ? ["b3"] : []), "b2", "b1", "SourceGraphic"]
    .map(n => `<feMergeNode in="${n}"/>`).join("");
  return `<filter id="${id}" x="-150%" y="-150%" width="400%" height="400%">${nodes}<feMerge>${merges}</feMerge></filter>`;
}

// Soft glow filter used for the animated border
function borderGlowFilter() {
  return `<filter id="bf" x="-4%" y="-4%" width="108%" height="108%"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;
}

// ─── Geometry helpers ────────────────────────────────────────────────────────

function hexPoly(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
}

function animate(begin) {
  return `<animate attributeName="stroke-dashoffset" from="0" to="-${PATH_LEN}" dur="${ANIM_DUR}s" repeatCount="indefinite" calcMode="linear" begin="${begin}"/>`;
}

// ─── Aurora background ───────────────────────────────────────────────────────
// Generates three slow-drifting radial gradient blobs that mimic northern lights.
// Uses the theme's snake colours so each theme gets its own aurora palette.

function buildAurora(theme) {
  const cols = [
    theme.snakeColors[0],
    theme.snakeColors[2] || theme.snakeColors[1],
    theme.snakeColors[4] || theme.snakeColors[3] || theme.snakeColors[0],
  ];

  const defs = cols.map((c, i) =>
    `<radialGradient id="au${i}" cx="50%" cy="50%" r="50%">` +
    `<stop offset="0%" stop-color="${c}" stop-opacity="0.14"/>` +
    `<stop offset="100%" stop-color="${c}" stop-opacity="0"/>` +
    `</radialGradient>`
  ).join("");

  // Spread the blobs across the SVG
  const positions = [
    [SVG_W * 0.22, SVG_H * 0.46],
    [SVG_W * 0.72, SVG_H * 0.24],
    [SVG_W * 0.52, SVG_H * 0.70],
  ];
  const rxs  = [SVG_W * 0.38, SVG_W * 0.32, SVG_W * 0.28];
  const rys  = [SVG_H * 0.58, SVG_H * 0.52, SVG_H * 0.46];
  const durs  = [9, 12, 10];
  const moves = [[22, -9], [-18, 13], [14, -11]];

  const ellipses = cols.map((_, i) => {
    const [cx, cy] = positions[i];
    const [dx, dy] = moves[i];
    return (
      `<ellipse cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" ` +
      `rx="${rxs[i].toFixed(0)}" ry="${rys[i].toFixed(0)}" fill="url(#au${i})">` +
      `<animateTransform attributeName="transform" type="translate" ` +
      `values="0,0;${dx},${dy};0,0" dur="${durs[i]}s" repeatCount="indefinite" ` +
      `calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1"/>` +
      `</ellipse>`
    );
  }).join("");

  return { defs, ellipses };
}

// ─── Snake layers ────────────────────────────────────────────────────────────

function buildSnakeLayers(users, theme) {
  const N = users.length;
  let defs   = "";
  let layers = "";

  // Glow intensity → blur radii for body filter and head filter
  const gi = theme.glowIntensity || 0;
  const [b1, b2, b3]    = gi === 3 ? [2.5, 9, 22]  : gi === 2 ? [2, 7, 0]    : [1.5, 5, 0];
  const [hb1, hb2, hb3] = gi === 3 ? [3, 11, 28]   : gi === 2 ? [2.8, 9, 18] : [2.5, 8, 16];

  // Animated colour cycling for legendary_ultimate / animatedSnake themes
  const animated     = !!(theme.animatedSnake || theme.legendaryUltimate);
  const rainbowVals  = RAINBOW.join(";");
  const colorAnimEl  = animated
    ? `<animate attributeName="stroke" values="${rainbowVals}" dur="4s" repeatCount="indefinite" calcMode="linear"/>`
    : "";
  const fillAnimEl   = animated
    ? `<animate attributeName="fill"   values="${rainbowVals}" dur="4s" repeatCount="indefinite" calcMode="linear"/>`
    : "";

  for (let i = 0; i < N; i++) {
    const { color, username } = users[i];
    const p = (i * ANIM_DUR) / N;

    const mBegin  = `${-p}s`;
    const t1Begin = `${-(p + ANIM_DUR - 1)}s`;
    const t2Begin = `${-(p + ANIM_DUR - 2)}s`;
    const t3Begin = `${-(p + ANIM_DUR - 3)}s`;
    const hBegin  = `${-(p + HEAD_ADV)}s`;

    defs += glowFilter(`g${i}`,  b1, b2, b3);
    defs += glowFilter(`gh${i}`, hb1, hb2, hb3);

    // Build path layers into an array for clean rendering
    const pathLayers = [];

    if (theme.particleTrails) {
      pathLayers.push(
        `<path fill="none" stroke="${color}" stroke-width="16" stroke-linecap="round" ` +
        `stroke-dasharray="${da(TRAIL3_LEN)}" stroke-opacity="0.05" filter="url(#g${i})">` +
        `${animate(t3Begin)}${colorAnimEl}</path>`
      );
    }

    pathLayers.push(
      `<path fill="none" stroke="${color}" stroke-width="10" stroke-linecap="round" ` +
      `stroke-dasharray="${da(TRAIL2_LEN)}" stroke-opacity="0.09" filter="url(#g${i})">` +
      `${animate(t2Begin)}${colorAnimEl}</path>`
    );
    pathLayers.push(
      `<path fill="none" stroke="${color}" stroke-width="6"  stroke-linecap="round" ` +
      `stroke-dasharray="${da(TRAIL1_LEN)}" stroke-opacity="0.20" filter="url(#g${i})">` +
      `${animate(t1Begin)}${colorAnimEl}</path>`
    );
    pathLayers.push(
      `<path fill="none" stroke="${color}" stroke-width="3"  stroke-linecap="round" ` +
      `stroke-dasharray="${da(SNAKE_LEN)}"  filter="url(#g${i})">` +
      `${animate(mBegin)}${colorAnimEl}</path>`
    );
    pathLayers.push(
      `<circle r="5.5" fill="${color}" filter="url(#gh${i})">` +
      `<animateMotion dur="${ANIM_DUR}s" repeatCount="indefinite" calcMode="linear" begin="${hBegin}">` +
      `<mpath xlink:href="#sp"/></animateMotion>${fillAnimEl}</circle>`
    );

    layers += `\n  <!-- snake: ${username} color:${color} -->\n  ${pathLayers.join("\n  ")}`;
  }

  return { defs, layers };
}

// ─── Rank badge ──────────────────────────────────────────────────────────────

function buildRankBadge(rank, theme, defsOut) {
  const rbx = SVG_W - 38, rby = 27;
  defsOut.push(glowFilter("hf", 1, 4));

  const fillId = `rbf${rank.tier}`;
  if (rank.tier === 5) {
    defsOut.push(
      `<linearGradient id="${fillId}" x1="0%" y1="0%" x2="100%" y2="100%">` +
      `<stop offset="0%"   stop-color="#ff0000"><animate attributeName="stop-color" values="#ff0000;#ff8800;#ffff00;#00ee88;#0088ff;#ff00ff;#ff0000" dur="4s" repeatCount="indefinite"/></stop>` +
      `<stop offset="100%" stop-color="#ff00ff"><animate attributeName="stop-color" values="#ff00ff;#ff0000;#ff8800;#ffff00;#00ee88;#0088ff;#ff00ff" dur="4s" repeatCount="indefinite"/></stop>` +
      `</linearGradient>`
    );
  }

  const polyFill   = rank.tier === 5 ? `url(#${fillId})` : rank.bg;
  const strokeAnim = rank.tier === 5
    ? `<animate attributeName="stroke" values="${rank.glow};#ffff00;#00ff88;${rank.glow}" dur="4s" repeatCount="indefinite"/>`
    : "";

  return (
    `<polygon points="${hexPoly(rbx, rby, 22)}" fill="${polyFill}" stroke="${rank.glow}" stroke-width="1.5" filter="url(#hf)">${strokeAnim}</polygon>\n` +
    `  <text x="${rbx}" y="${rby - 5}" text-anchor="middle" fill="${rank.color}" font-size="6.8" font-family="monospace" font-weight="bold">${rank.name}</text>\n` +
    `  <text x="${rbx}" y="${rby + 9}" text-anchor="middle" fill="${rank.color}" font-size="10"  font-family="monospace">${rank.symbol}</text>`
  );
}

// ─── Main render ─────────────────────────────────────────────────────────────

export function renderSVG(users, theme) {
  const primary = users[0];
  const rank     = getRank(primary.total);
  const snakePath = buildSnakePath(GX, GY);

  // ── Aurora background ──────────────────────────────────────────────────
  let auroraDefs    = "";
  let auroraLayers  = "";
  if (theme.aurora) {
    const au = buildAurora(theme);
    auroraDefs   = au.defs;
    auroraLayers = au.ellipses;
  }

  // ── Heatmap ────────────────────────────────────────────────────────────
  const cellMap = new Map(primary.cells.map(c => [`${c.col},${c.row}`, c.level]));
  let heatmap = "";
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const lvl = Math.min(cellMap.get(`${c},${r}`) ?? 0, theme.levels.length - 1);
      heatmap += `<rect x="${GX + c * STEP}" y="${GY + r * STEP}" width="${CELL}" height="${CELL}" rx="2" fill="${theme.levels[lvl]}"/>`;
    }
  }

  // ── Snake layers ───────────────────────────────────────────────────────
  const { defs: snakeDefs, layers } = buildSnakeLayers(users, theme);

  // ── Rank badge ─────────────────────────────────────────────────────────
  const extraDefs = [];
  const badge = buildRankBadge(rank, theme, extraDefs);

  // ── Animated border ────────────────────────────────────────────────────
  let borderFilterDef = "";
  let borderAnimEl    = "";
  let borderStroke    = theme.border;
  let borderWidth     = "1";
  let borderOpacity   = "0.7";
  let borderFilterAttr = "";

  if (theme.borderAnim && theme.borderAnim.length) {
    const dur = theme.legendaryUltimate ? "4s" : "5s";
    borderFilterDef  = borderGlowFilter();
    borderAnimEl     = `<animate attributeName="stroke" values="${theme.borderAnim.join(";")}" dur="${dur}" repeatCount="indefinite"/>`;
    borderStroke     = theme.borderAnim[0];
    borderWidth      = "1.5";
    borderOpacity    = "1";
    borderFilterAttr = ` filter="url(#bf)"`;
  }

  // ── Glassmorphism overlay ──────────────────────────────────────────────
  const glassLayer = theme.glassmorphism
    ? `<rect width="${SVG_W}" height="${SVG_H}" fill="white" fill-opacity="0.018" stroke="white" stroke-opacity="0.07" stroke-width="1" rx="8"/>`
    : "";

  // ── Header ─────────────────────────────────────────────────────────────
  let header = "";
  if (users.length === 1) {
    header =
      `<text x="15" y="27" font-size="16" fill="${theme.text}" font-family="monospace" font-weight="bold">@${primary.username}</text>\n` +
      `  <text x="15" y="43" font-size="10" fill="${theme.muted}" font-family="monospace">GitHub Contributions · ${new Date().getFullYear()}</text>`;
  } else {
    header = `<text x="15" y="22" font-size="13" fill="${theme.text}" font-family="monospace" font-weight="bold">Multi-User Snake</text>`;
    users.forEach((u, i) => {
      header += `\n  <circle cx="${18 + i * 115}" cy="38" r="5" fill="${u.color}"/>`;
      header += `\n  <text x="${28 + i * 115}" y="42" font-size="10" fill="${theme.text}" font-family="monospace">@${u.username}</text>`;
    });
  }

  // ── Stats footer ───────────────────────────────────────────────────────
  const statsY1 = GY + ROWS * STEP + 14;
  const statsY2 = statsY1 + 17;
  const items = [
    { label: "TOTAL",   value: primary.total.toLocaleString(),  color: theme.text  },
    { label: "STREAK",  value: `${primary.streak}d`,            color: theme.text  },
    { label: "LONGEST", value: `${primary.longestStreak}d`,     color: theme.text  },
    { label: "RANK",    value: rank.name,                       color: rank.color  },
  ];
  const colW  = SVG_W / items.length;
  const stats = items.map((s, i) => {
    const x = (colW * i + colW / 2).toFixed(0);
    return (
      `<text x="${x}" y="${statsY1}" text-anchor="middle" font-size="8"  fill="${theme.muted}" font-family="monospace">${s.label}</text>\n` +
      `  <text x="${x}" y="${statsY2}" text-anchor="middle" font-size="13" fill="${s.color}" font-family="monospace" font-weight="bold">${s.value}</text>`
    );
  }).join("\n  ");

  // ── Assemble SVG ───────────────────────────────────────────────────────
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${SVG_W}" height="${SVG_H}" viewBox="0 0 ${SVG_W} ${SVG_H}">
<defs>
  ${extraDefs.join("\n  ")}
  ${snakeDefs}
  ${auroraDefs}
  ${borderFilterDef}
</defs>
<rect width="${SVG_W}" height="${SVG_H}" fill="${theme.bg}" rx="8"/>
${auroraLayers}
${glassLayer}
<rect width="${SVG_W}" height="${SVG_H}" fill="none" stroke="${borderStroke}" stroke-width="${borderWidth}" rx="8" opacity="${borderOpacity}"${borderFilterAttr}>${borderAnimEl}</rect>
${header}
${badge}
<g>${heatmap}</g>
<path id="sp" d="${snakePath}" fill="none" stroke="none"/>
${layers}
${stats}
</svg>`;
}
