export const GRID = { X: 15, Y: 55, COLS: 53, ROWS: 7, STEP: 13, CELL: 11 };

// Total serpentine path length: 53 cols × 6 vertical segments × 13px + 52 horizontal jumps × 13px = 4810px
export const PATH_LEN = GRID.COLS * (GRID.ROWS - 1) * GRID.STEP + (GRID.COLS - 1) * GRID.STEP;

export function buildSnakePath(gridX, gridY) {
  const { COLS, ROWS, STEP } = GRID;
  const pts = [];
  for (let c = 0; c < COLS; c++) {
    const x = (gridX + c * STEP + 5).toFixed(1);
    const goDown = c % 2 === 0;
    for (let i = 0; i < ROWS; i++) {
      const r = goDown ? i : ROWS - 1 - i;
      pts.push(`${x} ${(gridY + r * STEP + 5).toFixed(1)}`);
    }
  }
  return "M " + pts.join(" L ");
}

export function getRank(total) {
  if (total >= 2500) return { name: "LEGENDARY", color: "#ff6e27", bg: "#1a0800", glow: "#ff4400", symbol: "✦", tier: 5 };
  if (total >= 1000) return { name: "DIAMOND",   color: "#b9f2ff", bg: "#001820", glow: "#00d4ff", symbol: "◆", tier: 4 };
  if (total >= 500)  return { name: "GOLD",      color: "#ffd700", bg: "#1a1400", glow: "#ffaa00", symbol: "★", tier: 3 };
  if (total >= 200)  return { name: "SILVER",    color: "#d0d0d0", bg: "#141414", glow: "#aaaaaa", symbol: "●", tier: 2 };
  if (total >= 50)   return { name: "BRONZE",    color: "#cd7f32", bg: "#120800", glow: "#8b5523", symbol: "▲", tier: 1 };
  return               { name: "ROOKIE",     color: "#667788", bg: "#0d0d12", glow: "#445566", symbol: "·", tier: 0 };
}
