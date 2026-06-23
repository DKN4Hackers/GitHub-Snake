<div align="center">

# 🐍 GitHub Snake

**An ultra-smooth, neon-glowing animated SVG snake that devours your GitHub contribution heatmap.**

[![Node.js](https://img.shields.io/badge/Node.js-≥18-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)
[![ES Modules](https://img.shields.io/badge/ES-Modules-orange?style=flat-square)](https://nodejs.org/api/esm.html)
[![Themes](https://img.shields.io/badge/Themes-25-blueviolet?style=flat-square)](lib/themes.js)
[![Open Source](https://img.shields.io/badge/Open-Source-blue?style=flat-square&logo=github)](https://github.com)

---

![snake](https://git-hub-snake.vercel.app/api/snake?username=DKN4Hackers&theme=legendary_ultimate)

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
| 🔥 **Neon glow + trails** | 3–4 layer SVG filter stack: tight core glow, medium halo, wide bloom, particle burst |
| 📊 **Heatmap overlay** | Contribution intensity (level 0–4) rendered as colored cells beneath the snake |
| 🎮 **Gamified ranking** | 6 tiers from Rookie → Legendary, shown as an animated hexagon badge |
| 🌍 **Multi-user mode** | Up to 4 snakes on the same grid, each phase-staggered around the loop |
| ⚡ **Ultra-smooth animation** | Pure SMIL SVG animation — no JS, no Canvas, works in `<img>` tags everywhere |
| 📦 **Zero heavy deps** | Only `node-fetch`. No Express, no canvas, no headless browser |
| 🎨 **25 premium themes** | 5 legacy + 20 new: luxury, gaming, cyberpunk, space, retro, and more |
| 🌌 **Aurora backgrounds** | Animated northern-lights radial gradient blobs on select themes |
| ✨ **Animated borders** | Colour-cycling glowing border via SMIL `stroke` animation |
| 🌈 **Rainbow snake** | `legendary_ultimate` cycles every snake stroke through the full RGB spectrum |
| 💎 **Glassmorphism** | Frosted-glass panel overlay on `applepro` theme |

---

## 🚀 Quick Start — Embed in your GitHub Profile

Add this to your profile `README.md` (replace `YOUR_USERNAME`):

```md
<!-- Legendary Ultimate — rainbow animated -->
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=legendary_ultimate)

<!-- Neon theme -->
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=neon)

<!-- Dark theme (GitHub default style) -->
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=dark)

<!-- Cyberpunk -->
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=cyberpunk)

<!-- Matrix -->
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=matrix)

<!-- Ferrari -->
![snake](https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=ferrari)
```

HTML version (recommended — centers the image):

```html
<picture>
  <img src="https://git-hub-snake.vercel.app/api/snake?username=YOUR_USERNAME&theme=legendary_ultimate" alt="snake" />
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
| `theme` | `string` | `dark` | Any of the 25 theme names below |

> `username` and `users` are mutually exclusive. Use one or the other.

### Examples

```
# Single user, legendary ultimate theme
/api/snake?username=DKN4Hackers&theme=legendary_ultimate

# Single user, neon theme
/api/snake?username=DKN4Hackers&theme=neon

# Single user, default dark theme
/api/snake?username=torvalds

# Multi-user — 3 snakes on one grid
/api/snake?users=DKN4Hackers,torvalds,gvanrossum&theme=tokyo

# Premium themes
/api/snake?username=DKN4Hackers&theme=matrix
/api/snake?username=DKN4Hackers&theme=ferrari
/api/snake?username=DKN4Hackers&theme=synthwave
/api/snake?username=DKN4Hackers&theme=spacex
```

---

## 🎨 Themes

**25 themes** across 10 categories. All themes provide 5 snake colors for multi-user mode.

---

### ⌨️ Developer

#### `dark` — GitHub native dark palette
```
Background  #0d1117    Empty cell  #161b22
Snake       #58a6ff    Max cell    #39d353
```

#### `tokyo` — Tokyo Night editor colour scheme
```
Background  #1a1b26    Empty cell  #24283b
Snake       #7aa2f7    Max cell    #4060cf
```

#### `matrix` — Matrix digital rain · hacker terminal ✨ Animated border · Particle trails · Intense glow
```
Background  #000300    Empty cell  #001400
Snake       #00ff41    Max cell    #00cc00
```

---

### 💡 Neon

#### `neon` — Deep black + electric colors · Enhanced glow
```
Background  #000011    Empty cell  #07071a
Snake       #00ffff    Max cell    #00aa50
```

---

### 🤖 Cyberpunk

#### `cyberpunk` — High-voltage cyber night · Animated border
```
Background  #0a0010    Empty cell  #100020
Snake       #ff00aa    Max cell    #8800cc
```

#### `tron` — Tron Legacy · electric circuit grid · Animated border · Particle trails
```
Background  #000810    Empty cell  #000d1a
Snake       #00e5ff    Max cell    #00aacc
```

#### `cybersamurai` — Japanese cyberpunk · neon Tokyo night · Aurora · Animated border
```
Background  #08001a    Empty cell  #0f0025
Snake       #ff00cc    Max cell    #7700bb
```

#### `quantum` — Quantum computing · electric violet · Animated border · Particle trails · Intense glow
```
Background  #000815    Empty cell  #000d20
Snake       #6655ff    Max cell    #003599
```

---

### 🎮 Gaming

#### `rtx` — NVIDIA RTX high-performance graphics · Animated border
```
Background  #0a0f0a    Empty cell  #0f160f
Snake       #76b900    Max cell    #3f6a3f
```

#### `neondragon` — Legendary neon dragon · emerald fire · Animated border · Particle trails · Max glow
```
Background  #000d05    Empty cell  #001a0a
Snake       #00ff88    Max cell    #00bb55
Secondary   #ff4400 (fiery accent on trail)
```

---

### 💎 Luxury

#### `ferrari` — Ferrari racing · carbon fiber and rosso · Animated border
```
Background  #0a0000    Empty cell  #120000
Snake       #ff2200    Max cell    #cc0000
Accent      #ffd700 (gold)
```

#### `lamborghini` — Supercar · matte black and yellow · Animated border
```
Background  #050505    Empty cell  #0a0a0a
Snake       #ffee00    Max cell    #666600
```

#### `porsche` — Minimal luxury · graphite and gold · Animated border
```
Background  #111215    Empty cell  #1a1c20
Snake       #d4af37    Max cell    #505560
```

#### `emerald` — Emerald gemstone · deep green and gold · Animated border
```
Background  #000f05    Empty cell  #001a0a
Snake       #50c878    Max cell    #00783c
Accent      #ffd700 (gold)
```

#### `royalgold` — Prestige metallic luxury · Animated border · Particle trails
```
Background  #080600    Empty cell  #110f00
Snake       #ffd700    Max cell    #554700
```

---

### 🚀 Space

#### `spacex` — Deep space engineering · Animated border
```
Background  #000005    Empty cell  #050510
Snake       #005288    Max cell    #1a1a66
Accent      #4488cc (rocket blue)
```

#### `nasa` — Deep-space mission control · Animated border
```
Background  #000520    Empty cell  #000a35
Snake       #fc3d21    Max cell    #0033cc
Accent      #ffffff (white) · #0b3d91 (NASA blue)
```

---

### 🌆 Retro

#### `vaporwave` — Retro-futuristic sunset · Aurora · Animated border
```
Background  #120018    Empty cell  #1a0025
Snake       #ff71ce    Max cell    #7700aa
Palette     #b967ff · #01cdfe · #05ffa1 · #fffb96
```

#### `synthwave` — 80s retro-future purple skies · Aurora · Animated border
```
Background  #1a0533    Empty cell  #240640
Snake       #f72585    Max cell    #8b1dbf
Palette     #7209b7 · #4cc9f0 · #ff9a3c · #480ca8
```

---

### 🔲 Minimal

#### `applepro` — Apple Vision Pro · frosted glass premium · Glassmorphism
```
Background  #0a0a0f    Empty cell  #13131a
Snake       #2997ff    Max cell    #32324a
Palette     #34c759 · #ff375f · #ff9f0a · #bf5af2
```

#### `arcticice` — Crystal frozen aesthetic · Aurora · Animated border
```
Background  #080e18    Empty cell  #0d1525
Snake       #88ccff    Max cell    #224878
```

---

### 🌊 Nature

#### `ocean` — Deep ocean blues and teals
```
Background  #020c1b    Empty cell  #0a1628
Snake       #64ffda    Max cell    #2d6fe0
```

#### `oceandeep` — Bioluminescent abyss · Animated border · Particle trails
```
Background  #001018    Empty cell  #001a25
Snake       #00e5ff    Max cell    #00557a
```

---

### ⚗️ Experimental

#### `volcano` — Obsidian lava core · Animated border · Particle trails · Max glow
```
Background  #0a0000    Empty cell  #150000
Snake       #ff5500    Max cell    #771a00
Accent      #ff8800 · #ffaa00 (molten orange)
```

#### `legendary_ultimate` — 🏆 Highest tier · All effects enabled
```
Background  #030005    Empty cell  #050008
Snake       Rainbow animated (full RGB cycle)
Max cell    #8800cc
```

**Special effects active:**
- 🌈 Rainbow colour cycle on every snake stroke + head
- 🌌 Aurora background (3 animated radial blobs)
- ✨ Animated border cycling through the full spectrum
- 💥 Particle trail (4th outermost glow layer)
- 🔆 Maximum glow intensity (3-layer blur stack)

---

### 📋 All Themes at a Glance

| Theme | Category | Glow | Aurora | Animated Border | Particle Trails |
|---|---|:---:|:---:|:---:|:---:|
| `dark` | Developer | — | — | — | — |
| `tokyo` | Developer | — | — | — | — |
| `matrix` | Developer | ●●● | — | ✓ | ✓ |
| `neon` | Neon | ●● | — | — | — |
| `cyberpunk` | Cyberpunk | ●● | — | ✓ | — |
| `tron` | Cyberpunk | ●● | — | ✓ | ✓ |
| `cybersamurai` | Cyberpunk | ●● | ✓ | ✓ | — |
| `quantum` | Experimental | ●●● | — | ✓ | ✓ |
| `rtx` | Gaming | ●● | — | ✓ | — |
| `neondragon` | Gaming | ●●● | — | ✓ | ✓ |
| `ferrari` | Luxury | ●● | — | ✓ | — |
| `lamborghini` | Luxury | ●● | — | ✓ | — |
| `porsche` | Luxury | ● | — | ✓ | — |
| `emerald` | Luxury | ●● | — | ✓ | — |
| `royalgold` | Luxury | ●● | — | ✓ | ✓ |
| `spacex` | Space | ●● | — | ✓ | — |
| `nasa` | Space | ●● | — | ✓ | — |
| `vaporwave` | Retro | ●● | ✓ | ✓ | — |
| `synthwave` | Retro | ●● | ✓ | ✓ | — |
| `applepro` | Minimal | ● | — | — | — |
| `arcticice` | Minimal | ●● | ✓ | ✓ | — |
| `ocean` | Nature | ● | — | — | — |
| `oceandeep` | Nature | ●● | — | ✓ | ✓ |
| `volcano` | Experimental | ●●● | — | ✓ | ✓ |
| `legendary_ultimate` | Experimental | ●●● | ✓ | ✓ | ✓ |

> **Glow:** ● light · ●● strong · ●●● maximum (3-layer bloom)

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
/api/snake?users=alice,bob,carol,dave&theme=legendary_ultimate
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
http://localhost:3000/api/snake?username=YOUR_USERNAME&theme=legendary_ultimate
```

### Deploy to Vercel

The `api/snake.js` file exports a standard Vercel/Edge-compatible handler. Deploy with one command:

```bash
npm install -g vercel
vercel
```

Then use your Vercel URL:

```md
![snake](https://your-app.vercel.app/api/snake?username=YOUR_USERNAME&theme=legendary_ultimate)
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
│   ├── svg.js            ← SVG renderer — animation engine, filters, aurora, badge
│   └── themes.js         ← 25 theme definitions + category helpers
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
  → lib/svg.js            renders SVG with aurora, animated border, glow layers
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

### 3–4 Layer Neon Trail

Each snake is rendered as three (or four, for particle-trail themes) stacked `<path>` elements sharing the same grid path:

| Layer | `stroke-width` | `stroke-opacity` | Dash length | Purpose |
|---|---|---|---|---|
| Particle burst ✨ | 16 px | 0.05 | 520 px | Ultra-wide outermost bloom (3s lag) |
| Outer glow | 10 px | 0.09 | 390 px | Wide bloom (2s lag) |
| Inner glow | 6 px | 0.20 | 260 px | Soft halo (1s lag) |
| Snake body | 3 px | 1.00 | 130 px | Solid neon core |

> The particle burst layer is only present on themes with `particleTrails: true`.

The **lag** is implemented with negative SMIL `begin` offsets:

```
Main:   begin="-0s"
Trail1: begin="-29s"    ← ANIM_DUR - 1  (1s lag)
Trail2: begin="-28s"    ← ANIM_DUR - 2  (2s lag)
Trail3: begin="-27s"    ← ANIM_DUR - 3  (3s lag)  [particleTrails only]
Head:   begin="-0.811s" ← HEAD_ADV = SNAKE_LEN / SPEED
```

### Glowing Head

A `<circle r="5.5">` follows the path with `<animateMotion>` + `<mpath>`, leading the body by exactly `SNAKE_LEN / SPEED ≈ 0.811 s`. Two or three stacked `feGaussianBlur` passes create a dramatic flare (intensity scales with `glowIntensity`).

### Glow Intensity Levels

| `glowIntensity` | Body filter | Head filter | Themes |
|:---:|---|---|---|
| `1` | `1.5, 5` | `2.5, 8, 16` | porsche, applepro, ocean |
| `2` | `2, 7` | `2.8, 9, 18` | neon, cyberpunk, tron, ferrari … |
| `3` | `2.5, 9, 22` | `3, 11, 28` | matrix, neondragon, quantum, volcano, legendary_ultimate |

### Aurora Background

Themes with `aurora: true` generate three overlapping radial gradient ellipses that slowly drift using `animateTransform type="translate"`. Colours are derived from the theme's own `snakeColors` palette so each aurora matches its theme perfectly.

### Animated Border

Themes with `borderAnim` inject `<animate attributeName="stroke" values="...">` directly on the border `<rect>`, cycling through the colour array. A soft `feGaussianBlur` border-glow filter is also applied so the glow pulses with the colour change.

### Rainbow Snake (`legendary_ultimate`)

When `animatedSnake: true`, every snake path element and the head circle receive:

```xml
<animate attributeName="stroke" values="#ff0066;#ff8800;#ffff00;#00ff88;#0088ff;#aa00ff;#ff00aa;#ff0066"
         dur="4s" repeatCount="indefinite" calcMode="linear"/>
```

This produces a full-spectrum RGB cycle independent of the dashoffset animation.

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
open http://localhost:3000/api/snake?username=YOUR_USERNAME&theme=legendary_ultimate
```

### Adding a Theme

Edit [lib/themes.js](lib/themes.js) and add a new entry. Required fields + optional premium fields:

```js
my_theme: {
  // ── Required ────────────────────────────────────────────
  bg:          "#...",   // SVG background
  surface:     "#...",   // reserved for future use
  border:      "#...",   // SVG border stroke (fallback)
  text:        "#...",   // username + stat values
  muted:       "#...",   // stat labels
  snakeColors: ["#...", "#...", "#...", "#...", "#..."],  // per-user snake colors (5)
  levels:      ["#...", "#...", "#...", "#...", "#..."],  // contribution levels 0–4 (5)

  // ── Optional metadata ───────────────────────────────────
  category:    "gaming",          // see THEME_CATEGORIES in themes.js
  description: "My awesome theme",

  // ── Optional visual effects ─────────────────────────────
  glow:          "#00ff41",       // primary glow tint (informational)
  glowIntensity: 2,               // 1 = light · 2 = strong · 3 = max
  borderAnim:    ["#aaa", "#bbb", "#aaa"],  // animated border colour cycle
  aurora:        true,            // animated radial gradient background blobs
  glassmorphism: true,            // frosted-glass white overlay rect
  particleTrails: true,           // 4th outermost trail layer (520 px)
  animatedSnake: true,            // rainbow colour cycle on snake strokes
  legendaryUltimate: true,        // enables all effects + faster border cycle
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
