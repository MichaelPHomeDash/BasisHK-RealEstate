import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Set proper MIME types for special files
  app.use(express.static(staticPath, {
    setHeaders: (res, filePath) => {
      // Set correct content type for .txt files
      if (filePath.endsWith('.txt')) {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      }
      // Set correct content type for XML files
      if (filePath.endsWith('.xml')) {
        res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      }
    }
  }));

  // Health check endpoint for cloud platforms (DigitalOcean, etc.)
  app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Explicitly serve robots.txt, sitemap.xml, llms.txt, ai.txt
  app.get("/robots.txt", (_req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.sendFile(path.join(staticPath, "robots.txt"));
  });

  app.get("/sitemap.xml", (_req, res) => {
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.sendFile(path.join(staticPath, "sitemap.xml"));
  });

  app.get("/llms.txt", (_req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.sendFile(path.join(staticPath, "llms.txt"));
  });

  app.get("/ai.txt", (_req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.sendFile(path.join(staticPath, "ai.txt"));
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  // Use PORT from environment (DigitalOcean uses 8080 by default)
  const port = parseInt(process.env.PORT || "8080", 10);
  const host = "0.0.0.0"; // Bind to all interfaces for cloud deployment

  server.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}/`);
  });
}

startServer().catch(console.error);
