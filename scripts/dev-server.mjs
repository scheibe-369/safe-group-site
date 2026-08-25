import { startServer } from "next/dist/server/lib/start-server.js";

await startServer({
  dir: process.cwd(),
  hostname: process.env.HOSTNAME ?? "127.0.0.1",
  port: Number(process.env.PORT ?? 3000),
  isDev: true,
  allowRetry: false,
});
