import http from "http";
import { parse } from "url";
import handler from "./api/snake.js";

const PORT = process.env.PORT || 3000;

function adapt(res) {
  res.status = (code) => { res.statusCode = code; return res; };
  res.send   = (body) => { res.end(body); return res; };
  return res;
}

const server = http.createServer((req, res) => {
  const { query } = parse(req.url, true);
  req.query = query;
  Promise.resolve(handler(req, adapt(res))).catch(err => {
    console.error(err);
    res.statusCode = 500;
    res.end("Internal server error");
  });
});

server.listen(PORT, () => {
  console.log(`\n🐍  GitHub Snake running at http://localhost:${PORT}\n`);
  console.log("  Single user  →  http://localhost:" + PORT + "/api/snake?username=abdellahaarab&theme=neon");
  console.log("  Dark theme   →  http://localhost:" + PORT + "/api/snake?username=abdellahaarab&theme=dark");
  console.log("  Multi-user   →  http://localhost:" + PORT + "/api/snake?users=abdellahaarab,torvalds&theme=cyberpunk");
  console.log("  Themes: dark | neon | tokyo | cyberpunk | ocean\n");
});
