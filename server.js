/* eslint-disable @typescript-eslint/no-require-imports */
import { createServer } from "http";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = new URL(req.url, `http://${hostname}:${port}`);
      await handle(req, res, parsedUrl);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      console.error(`Error handling ${req.url}:`, message);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});