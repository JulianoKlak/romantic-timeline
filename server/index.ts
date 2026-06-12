import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Resolve static path - handle both local and Vercel deployments
  // In Vercel: __dirname = /var/task (or similar), files are at root/dist/public
  // Locally: __dirname = dist, files are at dist/public
  const isProduction = process.env.NODE_ENV === "production";
  const staticPath = isProduction
    ? path.resolve(__dirname, "public") // In prod: /dist/public
    : path.resolve(__dirname, "..", "dist", "public"); // In dev build: dist/public

  console.log(`[Server] Static path: ${staticPath}`);
  console.log(`[Server] NODE_ENV: ${process.env.NODE_ENV || "not set"}`);
  console.log(`[Server] __dirname: ${__dirname}`);

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    console.log(`[Server] Serving: ${indexPath}`);
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error(`[Server] Error serving index.html: ${err.message}`);
        res.status(404).send("index.html not found");
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
}

startServer().catch(console.error);
