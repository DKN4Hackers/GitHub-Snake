// ─── Theme schema ───────────────────────────────────────────────────────────
// Required  : bg, surface, border, text, muted, snakeColors[5], levels[5]
// Optional  : category, description, glow, glowIntensity (1-3),
//             borderAnim (string[]), aurora (bool), glassmorphism (bool),
//             particleTrails (bool), animatedSnake (bool), legendaryUltimate (bool)
// ────────────────────────────────────────────────────────────────────────────

export const themes = {

  // ── LEGACY — fully backward-compatible ───────────────────────────────────
  dark: {
    bg: "#0d1117", surface: "#161b22", border: "#30363d",
    text: "#e6edf3", muted: "#8b949e",
    snakeColors: ["#58a6ff", "#3fb950", "#f78166", "#d2a8ff", "#ffa657"],
    levels: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
    category: "developer", description: "GitHub native dark palette",
  },
  neon: {
    bg: "#000011", surface: "#070714", border: "#1a1a3a",
    text: "#e0e8ff", muted: "#5060a0",
    snakeColors: ["#00ffff", "#39ff14", "#ff00ff", "#ffff00", "#ff6600"],
    levels: ["#07071a", "#001a0a", "#003a1a", "#006a30", "#00aa50"],
    category: "neon", description: "Deep black with electric neon accents",
    glow: "#00ffff", glowIntensity: 2,
  },
  tokyo: {
    bg: "#1a1b26", surface: "#24283b", border: "#32344a",
    text: "#c0caf5", muted: "#565f89",
    snakeColors: ["#7aa2f7", "#9ece6a", "#f7768e", "#bb9af7", "#e0af68"],
    levels: ["#24283b", "#1a2040", "#233070", "#2d4099", "#4060cf"],
    category: "developer", description: "Tokyo Night editor colour scheme",
  },
  cyberpunk: {
    bg: "#0a0010", surface: "#100020", border: "#2d0050",
    text: "#fffb00", muted: "#998800",
    snakeColors: ["#ff00aa", "#00ffcc", "#ffff00", "#ff6600", "#cc00ff"],
    levels: ["#100020", "#1a0030", "#2d0055", "#550090", "#8800cc"],
    category: "cyberpunk", description: "High-voltage cyber night",
    glow: "#ff00aa", glowIntensity: 2,
    borderAnim: ["#ff00aa", "#00ffcc", "#ffff00", "#ff00aa"],
  },
  ocean: {
    bg: "#020c1b", surface: "#0a1628", border: "#1a3a5c",
    text: "#ccd6f6", muted: "#8892b0",
    snakeColors: ["#64ffda", "#00b4d8", "#90e0ef", "#48cae4", "#0077b6"],
    levels: ["#0a1628", "#0d2137", "#113060", "#1a4a99", "#2d6fe0"],
    category: "nature", description: "Deep ocean blues and teals",
    glow: "#64ffda", glowIntensity: 1,
  },

  // ── PREMIUM: DEVELOPER ───────────────────────────────────────────────────
  matrix: {
    bg: "#000300", surface: "#001400", border: "#003300",
    text: "#00ff41", muted: "#008f11",
    snakeColors: ["#00ff41", "#39ff14", "#00cc33", "#00ff88", "#33ff00"],
    levels: ["#001400", "#003300", "#005500", "#008800", "#00cc00"],
    category: "developer", description: "Matrix digital rain — hacker terminal",
    glow: "#00ff41", glowIntensity: 3,
    borderAnim: ["#00ff41", "#00cc33", "#008800", "#33ff00", "#00ff41"],
    particleTrails: true,
  },

  // ── PREMIUM: GAMING ──────────────────────────────────────────────────────
  rtx: {
    bg: "#0a0f0a", surface: "#0f160f", border: "#1a2a1a",
    text: "#76b900", muted: "#3a5a00",
    snakeColors: ["#76b900", "#00cc44", "#88cc00", "#44aa00", "#99dd00"],
    levels: ["#0f160f", "#1a2a1a", "#254025", "#325532", "#3f6a3f"],
    category: "gaming", description: "NVIDIA RTX high-performance graphics",
    glow: "#76b900", glowIntensity: 2,
    borderAnim: ["#76b900", "#88cc00", "#44aa00", "#99dd00", "#76b900"],
  },
  neondragon: {
    bg: "#000d05", surface: "#001a0a", border: "#003318",
    text: "#00ff88", muted: "#006633",
    snakeColors: ["#00ff88", "#ff4400", "#00ffcc", "#ff8800", "#44ff00"],
    levels: ["#001a0a", "#003318", "#005525", "#008840", "#00bb55"],
    category: "gaming", description: "Legendary neon dragon — emerald fire",
    glow: "#00ff88", glowIntensity: 3,
    borderAnim: ["#00ff88", "#ff4400", "#00ffcc", "#ff8800", "#44ff00", "#00ff88"],
    particleTrails: true,
  },

  // ── PREMIUM: CYBERPUNK ───────────────────────────────────────────────────
  tron: {
    bg: "#000810", surface: "#000d1a", border: "#001a33",
    text: "#00e5ff", muted: "#004d66",
    snakeColors: ["#00e5ff", "#00b4d8", "#48cae4", "#0096c7", "#caf0f8"],
    levels: ["#000d1a", "#001a33", "#003366", "#005599", "#00aacc"],
    category: "cyberpunk", description: "Tron Legacy — electric circuit grid",
    glow: "#00e5ff", glowIntensity: 2,
    borderAnim: ["#00e5ff", "#0088aa", "#00ccff", "#00e5ff"],
    particleTrails: true,
  },
  cybersamurai: {
    bg: "#08001a", surface: "#0f0025", border: "#220040",
    text: "#ff00cc", muted: "#660055",
    snakeColors: ["#ff00cc", "#cc00ff", "#ff0088", "#aa00ff", "#ff44cc"],
    levels: ["#0f0025", "#220040", "#380060", "#550090", "#7700bb"],
    category: "cyberpunk", description: "Japanese cyberpunk — neon Tokyo night",
    glow: "#ff00cc", glowIntensity: 2,
    borderAnim: ["#ff00cc", "#cc00ff", "#ff0088", "#aa00ff", "#ff00cc"],
    aurora: true,
  },
  quantum: {
    bg: "#000815", surface: "#000d20", border: "#001535",
    text: "#8877ff", muted: "#332288",
    snakeColors: ["#6655ff", "#aa44ff", "#4488ff", "#cc00ff", "#8877ff"],
    levels: ["#000d20", "#001535", "#001f55", "#002a75", "#003599"],
    category: "experimental", description: "Quantum computing — electric violet",
    glow: "#6655ff", glowIntensity: 3,
    borderAnim: ["#6655ff", "#aa44ff", "#4488ff", "#cc00ff", "#6655ff"],
    particleTrails: true,
  },

  // ── PREMIUM: LUXURY ──────────────────────────────────────────────────────
  ferrari: {
    bg: "#0a0000", surface: "#120000", border: "#330000",
    text: "#ff3311", muted: "#881100",
    snakeColors: ["#ff2200", "#ffd700", "#cc1100", "#ff5500", "#ffcc00"],
    levels: ["#120000", "#330000", "#660000", "#990000", "#cc0000"],
    category: "luxury", description: "Ferrari racing — carbon fiber and rosso",
    glow: "#ff2200", glowIntensity: 2,
    borderAnim: ["#ff2200", "#ffd700", "#cc1100", "#ff5500", "#ff2200"],
  },
  lamborghini: {
    bg: "#050505", surface: "#0a0a0a", border: "#1a1a1a",
    text: "#ffee00", muted: "#666600",
    snakeColors: ["#ffee00", "#ffe000", "#ffd000", "#ffcc00", "#ffbb00"],
    levels: ["#0a0a0a", "#1a1a00", "#2d2d00", "#444400", "#666600"],
    category: "luxury", description: "Lamborghini supercar — matte black and yellow",
    glow: "#ffee00", glowIntensity: 2,
    borderAnim: ["#ffee00", "#ffd000", "#ffaa00", "#ffee00"],
  },
  porsche: {
    bg: "#111215", surface: "#1a1c20", border: "#2e3035",
    text: "#e8e8e8", muted: "#888888",
    snakeColors: ["#d4af37", "#e8e8e8", "#c0c0c0", "#b8860b", "#daa520"],
    levels: ["#1a1c20", "#252830", "#303540", "#404550", "#505560"],
    category: "luxury", description: "Porsche minimal luxury — graphite and gold",
    glow: "#d4af37", glowIntensity: 1,
    borderAnim: ["#d4af37", "#c0c0c0", "#e8e8e8", "#d4af37"],
  },
  emerald: {
    bg: "#000f05", surface: "#001a0a", border: "#002d15",
    text: "#50c878", muted: "#1a6633",
    snakeColors: ["#50c878", "#ffd700", "#2ecc71", "#daa520", "#3cb371"],
    levels: ["#001a0a", "#002d15", "#004422", "#005c2e", "#00783c"],
    category: "luxury", description: "Emerald gemstone — deep green and gold",
    glow: "#50c878", glowIntensity: 2,
    borderAnim: ["#50c878", "#ffd700", "#2ecc71", "#daa520", "#50c878"],
  },
  royalgold: {
    bg: "#080600", surface: "#110f00", border: "#221c00",
    text: "#ffd700", muted: "#886600",
    snakeColors: ["#ffd700", "#ffaa00", "#ffe033", "#ffbb44", "#cc9900"],
    levels: ["#110f00", "#221c00", "#332a00", "#443800", "#554700"],
    category: "luxury", description: "Royal gold — prestige metallic luxury",
    glow: "#ffd700", glowIntensity: 2,
    borderAnim: ["#ffd700", "#ffaa00", "#cc9900", "#ffe033", "#ffd700"],
    particleTrails: true,
  },

  // ── PREMIUM: SPACE ───────────────────────────────────────────────────────
  spacex: {
    bg: "#000005", surface: "#050510", border: "#0a0a20",
    text: "#ffffff", muted: "#666688",
    snakeColors: ["#005288", "#ffffff", "#a0a0cc", "#4488cc", "#6699ee"],
    levels: ["#050510", "#0a0a20", "#0f0f35", "#141450", "#1a1a66"],
    category: "space", description: "SpaceX — deep space engineering",
    glow: "#4488cc", glowIntensity: 2,
    borderAnim: ["#4488cc", "#ffffff", "#005288", "#6699ee", "#4488cc"],
  },
  nasa: {
    bg: "#000520", surface: "#000a35", border: "#001050",
    text: "#ffffff", muted: "#8888aa",
    snakeColors: ["#fc3d21", "#ffffff", "#0b3d91", "#e8e8e8", "#aaaacc"],
    levels: ["#000a35", "#001050", "#001a80", "#0022aa", "#0033cc"],
    category: "space", description: "NASA deep-space mission control",
    glow: "#fc3d21", glowIntensity: 2,
    borderAnim: ["#fc3d21", "#ffffff", "#0b3d91", "#fc3d21"],
  },

  // ── PREMIUM: RETRO ───────────────────────────────────────────────────────
  vaporwave: {
    bg: "#120018", surface: "#1a0025", border: "#330040",
    text: "#ff71ce", muted: "#aa3377",
    snakeColors: ["#ff71ce", "#b967ff", "#01cdfe", "#05ffa1", "#fffb96"],
    levels: ["#1a0025", "#2a003a", "#3d0055", "#5a0075", "#7700aa"],
    category: "retro", description: "Vaporwave — retro-futuristic sunset",
    glow: "#ff71ce", glowIntensity: 2,
    borderAnim: ["#ff71ce", "#b967ff", "#01cdfe", "#05ffa1", "#ff71ce"],
    aurora: true,
  },
  synthwave: {
    bg: "#1a0533", surface: "#240640", border: "#380a55",
    text: "#f72585", muted: "#7b2d8b",
    snakeColors: ["#f72585", "#7209b7", "#4cc9f0", "#ff9a3c", "#480ca8"],
    levels: ["#240640", "#380a55", "#4f0f75", "#6b1499", "#8b1dbf"],
    category: "retro", description: "Synthwave — 80s retro-future purple skies",
    glow: "#f72585", glowIntensity: 2,
    borderAnim: ["#f72585", "#7209b7", "#4cc9f0", "#ff9a3c", "#f72585"],
    aurora: true,
  },

  // ── PREMIUM: MINIMAL ─────────────────────────────────────────────────────
  applepro: {
    bg: "#0a0a0f", surface: "#13131a", border: "#1e1e28",
    text: "#f5f5f7", muted: "#6e6e73",
    snakeColors: ["#2997ff", "#34c759", "#ff375f", "#ff9f0a", "#bf5af2"],
    levels: ["#13131a", "#1a1a25", "#222230", "#2a2a3d", "#32324a"],
    category: "minimal", description: "Apple Vision Pro — frosted glass premium",
    glow: "#2997ff", glowIntensity: 1,
    glassmorphism: true,
  },
  arcticice: {
    bg: "#080e18", surface: "#0d1525", border: "#152035",
    text: "#cce8ff", muted: "#6688aa",
    snakeColors: ["#88ccff", "#aaddff", "#66bbff", "#99ccff", "#ffffff"],
    levels: ["#0d1525", "#152035", "#1a2d4a", "#1e3a60", "#224878"],
    category: "minimal", description: "Arctic ice — crystal frozen aesthetic",
    glow: "#88ccff", glowIntensity: 2,
    borderAnim: ["#88ccff", "#aaddff", "#cceeff", "#ffffff", "#88ccff"],
    aurora: true,
  },

  // ── PREMIUM: NATURE ──────────────────────────────────────────────────────
  oceandeep: {
    bg: "#001018", surface: "#001a25", border: "#002535",
    text: "#00e5ff", muted: "#006677",
    snakeColors: ["#00e5ff", "#00b4aa", "#0080ff", "#00ccbb", "#4488cc"],
    levels: ["#001a25", "#002535", "#003550", "#004466", "#00557a"],
    category: "nature", description: "Ocean deep — bioluminescent abyss",
    glow: "#00e5ff", glowIntensity: 2,
    borderAnim: ["#00e5ff", "#00b4aa", "#0080ff", "#00ccbb", "#00e5ff"],
    particleTrails: true,
  },

  // ── PREMIUM: EXPERIMENTAL ────────────────────────────────────────────────
  volcano: {
    bg: "#0a0000", surface: "#150000", border: "#280000",
    text: "#ff5500", muted: "#882200",
    snakeColors: ["#ff5500", "#ff8800", "#ff3300", "#ffaa00", "#cc3300"],
    levels: ["#150000", "#280000", "#3d0000", "#551100", "#771a00"],
    category: "experimental", description: "Volcano — obsidian lava core",
    glow: "#ff5500", glowIntensity: 3,
    borderAnim: ["#ff5500", "#ff8800", "#ffaa00", "#ff3300", "#ff5500"],
    particleTrails: true,
  },

  // ── LEGENDARY ULTIMATE ───────────────────────────────────────────────────
  legendary_ultimate: {
    bg: "#030005", surface: "#050008", border: "#0a0015",
    text: "#ffffff", muted: "#aaaacc",
    snakeColors: ["#ff0066", "#ff8800", "#ffff00", "#00ff88", "#0088ff"],
    levels: ["#050008", "#1a0030", "#350055", "#550080", "#8800cc"],
    category: "experimental", description: "Legendary Ultimate — animated rainbow everything",
    glow: "#ff0066", glowIntensity: 3,
    borderAnim: ["#ff0000","#ff8800","#ffff00","#00ff88","#0088ff","#aa00ff","#ff00aa","#ff0000"],
    aurora: true,
    particleTrails: true,
    animatedSnake: true,
    legendaryUltimate: true,
  },
};

// ── Theme metadata helpers ───────────────────────────────────────────────────

export const THEME_CATEGORIES = {
  developer:    { label: "Developer",    icon: "⌨️"  },
  gaming:       { label: "Gaming",       icon: "🎮"  },
  cyberpunk:    { label: "Cyberpunk",    icon: "🤖"  },
  luxury:       { label: "Luxury",       icon: "💎"  },
  space:        { label: "Space",        icon: "🚀"  },
  retro:        { label: "Retro",        icon: "🌆"  },
  minimal:      { label: "Minimal",      icon: "🔲"  },
  nature:       { label: "Nature",       icon: "🌊"  },
  neon:         { label: "Neon",         icon: "💡"  },
  experimental: { label: "Experimental", icon: "⚗️"  },
};

export function getThemeNames() {
  return Object.keys(themes);
}

export function getThemesByCategory(category) {
  return Object.entries(themes)
    .filter(([, t]) => t.category === category)
    .map(([name]) => name);
}
