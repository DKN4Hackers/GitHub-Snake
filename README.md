<div align="center">

# 🐍 GitHub Snake

**An ultra-smooth, neon-glowing animated SVG snake that devours your GitHub contribution heatmap.**

[![Node.js](https://img.shields.io/badge/Node.js-≥18-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![ES Modules](https://img.shields.io/badge/ES-Modules-orange?style=flat-square)](https://nodejs.org/api/esm.html)
[![Open Source](https://img.shields.io/badge/Open-Source-blue?style=flat-square&logo=github)](https://github.com)

---


![snake](https://git-hub-snake.vercel.app/api/snake?username=DKN4Hackers)


### Live preview — drop this into your profile `README.md`:

```md
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=neon)
```

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🐉 **Real snake path** | Serpentine Hamiltonian path traverses all 53 × 7 = 371 contribution cells |
| 🔥 **Neon glow + trails** | 3-layer SVG filter stack: tight core glow, medium halo, wide bloom — all animated |
| 📊 **Heatmap overlay** | Contribution intensity (level 0–4) rendered as colored cells beneath the snake |
| 🎮 **Gamified ranking** | 6 tiers from Rookie → Legendary, shown as an animated hexagon badge |
| 🌍 **Multi-user mode** | Up to 4 snakes on the same grid, each phase-staggered around the loop |
| ⚡ **Ultra-smooth animation** | Pure SMIL SVG animation — no JS, no Canvas, works in `<img>` tags everywhere |
| 📦 **Zero heavy deps** | Only `node-fetch`. No Express, no canvas, no headless browser |
| 🎨 **5 themes** | `dark` `neon` `tokyo` `cyberpunk` `ocean` |

---

## 🚀 Quick Start — Embed in your GitHub Profile

Add this to your profile `README.md` (replace `YOUR_USERNAME`):

```md
<!-- Neon theme -->
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=neon)

<!-- Dark theme (GitHub default style) -->
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=dark)

<!-- Cyberpunk -->
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=cyberpunk)
```

HTML version (recommended — centers the image):

```html
<picture>
  <img src="https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=neon" alt="snake" />
</picture>
```

---

## 🌐 API Reference

**Endpoint:** `GET /api/snake`

### Query Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `username` | `string` | — | GitHub username (single-user mode) |
| `users` | `string` | — | Comma-separated usernames, max 4 (multi-user mode) |
| `theme` | `string` | `dark` | One of `dark` `neon` `tokyo` `cyberpunk` `ocean` |

> `username` and `users` are mutually exclusive. Use one or the other.

### Examples

```
# Single user, neon theme
/api/snake?username=DKN4Hackers&theme=neon

# Single user, default dark theme
/api/snake?username=torvalds

# Multi-user — 3 snakes on one grid
/api/snake?users=DKN4Hackers,torvalds,gvanrossum&theme=tokyo

# Ocean theme
/api/snake?username=DKN4Hackers&theme=ocean
```

---

## 🎨 Themes

### `dark` — GitHub default palette
```
Background  #0d1117    Empty cell  #161b22
Snake       #58a6ff    Max cell    #39d353
```

### `neon` — Deep black + electric colors
```
Background  #000011    Empty cell  #07071a
Snake       #00ffff    Max cell    #00aa50
```

### `tokyo` — Tokyo Night editor theme
```
Background  #1a1b26    Empty cell  #24283b
Snake       #7aa2f7    Max cell    #4060cf
```

### `cyberpunk` — Black + purple/magenta
```
Background  #0a0010    Empty cell  #100020
Snake       #ff00aa    Max cell    #8800cc
```

### `ocean` — Deep ocean blues and teals
```
Background  #020c1b    Empty cell  #0a1628
Snake       #64ffda    Max cell    #2d6fe0
```

Each theme provides 5 snake colors so multi-user snakes are always visually distinct.

---

## 🎮 Ranking System

Your rank is determined by your **total GitHub contributions in the last year**. It appears as an animated hexagon badge in the top-right of the SVG.

| Tier | Rank | Threshold | Color | Badge |
|:---:|---|---|---|---|
| 0 | **ROOKIE** | < 50 | `#667788` | · |
| 1 | **BRONZE** | ≥ 50 | `#cd7f32` | ▲ |
| 2 | **SILVER** | ≥ 200 | `#d0d0d0` | ● |
| 3 | **GOLD** | ≥ 500 | `#ffd700` | ★ |
| 4 | **DIAMOND** | ≥ 1 000 | `#b9f2ff` | ◆ |
| 5 | **LEGENDARY** | ≥ 2 500 | rainbow animated | ✦ |

> **LEGENDARY** gets a rainbow-animated gradient fill and cycling stroke color on the badge.

---

## 🌍 Multi-User Mode

Combine up to **4 GitHub profiles** into one animated SVG. Each snake gets:
- A unique color from the theme's palette
- An evenly-spaced phase offset (so no two snakes occupy the same position at the same time)
- Immediate visibility — snakes are pre-started with negative SMIL `begin` offsets

```
/api/snake?users=alice,bob,carol,dave&theme=neon
```

The **heatmap** always reflects the **first user's** contribution data. Stats in the footer also show the first user's numbers. Snake colors cycle from the theme's `snakeColors` array.

---

## 🖥️ Self-Hosting

### Run Locally

```bash
git clone https://github.com/DKN4Hackers/GitHub-Snake.git
cd github-snake
npm install
npm start
# → http://localhost:3000
```

Custom port:

```bash
PORT=4000 npm start
```

Open in your browser:

```
http://localhost:3000/api/snake?username=YOUR_USERNAME&theme=neon
```

### Deploy to Vercel

The `api/snake.js` file exports a standard Vercel/Edge-compatible handler. Deploy with one command:

```bash
npm install -g vercel
vercel
```

Then use your Vercel URL:

```md
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=neon)
```

### Deploy to Railway / Render / Fly.io

All three support plain Node.js HTTP servers. Set `PORT` via their environment variable panel and point the start command to `npm start`.

```bash
# Railway / Render
npm start

# Fly.io (set in fly.toml)
[processes]
  app = "npm start"
```

---

## 🏗️ Project Architecture

```
github-snake/
├── api/
│   └── snake.js          ← HTTP handler (Vercel-compatible)
├── lib/
│   ├── scraper.js        ← GitHub contributions HTML parser
│   ├── snake.js          ← Grid constants, path builder, rank logic
│   ├── svg.js            ← SVG renderer — animation engine, filters, badge
│   └── themes.js         ← Color theme definitions
├── utils/
│   └── cache.js          ← In-memory response cache (30-min TTL)
├── server.js             ← Local dev HTTP server (wraps handler)
└── package.json
```

### Data flow

```
Request
  → api/snake.js          parses ?username / ?users / ?theme
  → utils/cache.js        returns cached SVG if available
  → lib/scraper.js        fetches github.com/users/:name/contributions
  → lib/snake.js          builds serpentine path + computes rank
  → lib/svg.js            renders full SVG with all animation layers
  → Response              image/svg+xml, Cache-Control: max-age=3600
```

---

## ⚙️ How the Animation Works

### Serpentine Path

The snake follows a **boustrophedon (serpentine) Hamiltonian path** through the 53 × 7 contribution grid:

```
col 0 ↓   col 1 ↑   col 2 ↓   col 3 ↑  …
(0,0)     (1,6)     (2,0)     (3,6)
(0,1)     (1,5)     (2,1)     (3,5)
 …         …         …         …
(0,6)     (1,0)     (2,6)     (3,0)
```

Total path length: **4 810 px** (`53 × 6 × 13 + 52 × 13`)  
Animation cycle: **30 seconds** → speed ≈ 160 px/s

### 3-Layer Neon Trail

Each snake is rendered as three stacked `<path>` elements sharing the same grid path, all animated with SMIL `stroke-dashoffset`:

| Layer | `stroke-width` | `stroke-opacity` | `stroke-dasharray` | Purpose |
|---|---|---|---|---|
| Outer glow | 10 px | 0.09 | `390 4420` | Wide bloom (2s lag) |
| Inner glow | 6 px | 0.20 | `260 4550` | Soft halo (1s lag) |
| Snake body | 3 px | 1.00 | `130 4680` | Solid neon core |

The **lag** is implemented with negative SMIL `begin` offsets so trails are visible from the first frame (no start-up glitch):

```
Main:   begin="-0s"
Trail1: begin="-29s"   ← 29 = ANIM_DUR - 1  (1s lag within 30s cycle)
Trail2: begin="-28s"   ← 28 = ANIM_DUR - 2  (2s lag within 30s cycle)
Head:   begin="-0.811s" ← HEAD_ADV = SNAKE_LEN / SPEED
```

### Glowing Head

A `<circle r="5.5">` follows the path with `<animateMotion>` + `<mpath>`, leading the body by exactly `SNAKE_LEN / SPEED ≈ 0.811 s`. Two stacked `feGaussianBlur` passes (stdDeviation 2.5 and 8) create a dramatic flare.

### SVG Filter Glow

```xml
<filter id="g0" x="-150%" y="-150%" width="400%" height="400%">
  <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="b1"/>
  <feGaussianBlur in="SourceGraphic" stdDeviation="5"   result="b2"/>
  <feMerge>
    <feMergeNode in="b2"/>
    <feMergeNode in="b1"/>
    <feMergeNode in="SourceGraphic"/>
  </feMerge>
</filter>
```

Stacking `SourceGraphic` on top of the blurred copies creates the classic neon look: bright solid core with a diffuse halo.

### Seamless Looping

`stroke-dasharray` is set so the **pattern period equals the path length** (`dash + gap = 4810`). Animating `stroke-dashoffset` from `0` to `-4810` over 30 s completes exactly one period → frame-perfect seamless loop.

---

## 📡 Caching

Responses are cached **in-memory for 30 minutes** per `username(s) + theme` key. Downstream HTTP clients also receive `Cache-Control: public, max-age=3600`.

Cache is stored in `utils/cache.js` using a `Map` with auto-expiry via `setTimeout`. It lives in process memory — a server restart clears it.

---

## 🤝 Contributing

Pull requests are welcome!

```bash
# Fork → clone → install
git clone https://github.com/DKN4Hackers/GitHub-Snake.git
cd github-snake && npm install

# Start local server
npm start

# Open in browser
open http://localhost:3000/api/snake?username=YOUR_USERNAME&theme=neon
```

### Adding a Theme

Edit [lib/themes.js](lib/themes.js) and add a new entry following the existing structure:

```js
my_theme: {
  bg:          "#...",   // SVG background
  surface:     "#...",   // unused currently, reserved
  border:      "#...",   // SVG border stroke
  text:        "#...",   // username + stat values
  muted:       "#...",   // stat labels
  snakeColors: ["#...", "#...", "#...", "#...", "#..."],  // per-user snake colors (5)
  levels:      ["#...", "#...", "#...", "#...", "#..."],  // contribution levels 0–4 (5)
},
```

Then use it: `?theme=my_theme`

### Adding a Rank Tier

Edit the `getRank` function in [lib/snake.js](lib/snake.js).

---

## 📄 License

[MIT](LICENSE) — free to use, modify, and deploy.

---

<div align="center">

Built with pure SVG · No canvas · No puppeteer · No headless browser

**[⭐ Star this repo](https://github.com/DKN4Hackers/GitHub-Snake)** if it powers your profile!

</div>
