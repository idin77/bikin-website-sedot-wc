import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, GenerateVideosOperation } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not defined");
  }
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

  app.use(express.json());

  // API routes
  app.post("/api/generate-video", async (req, res) => {
    const { prompt } = req.body;
    try {
        const operation = await ai.models.generateVideos({
            model: 'veo-3.1-lite-generate-preview',
            prompt: prompt,
            config: {
              numberOfVideos: 1,
              resolution: '720p',
              aspectRatio: '16:9'
            }
        });
        res.json({ operationName: operation.name });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
  });

  app.post("/api/video-status", async (req, res) => {
    const { operationName } = req.body;
    try {
        const op = new GenerateVideosOperation();
        op.name = operationName;
        const updated = await ai.operations.getVideosOperation({ operation: op });
        res.json({ done: updated.done });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
  });

  app.post("/api/video-download", async (req, res) => {
    const { operationName } = req.body;
    try {
        const op = new GenerateVideosOperation();
        op.name = operationName;
        const updated = await ai.operations.getVideosOperation({ operation: op });
        const uri = updated.response?.generatedVideos?.[0]?.video?.uri;
        if (!uri) throw new Error("Video URI not found");

        const videoRes = await fetch(uri, {
          headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY || "" },
        });

        res.setHeader('Content-Type', 'video/mp4');
        videoRes.body!.pipeTo(
          new WritableStream({
            write(chunk) { res.write(chunk); },
            close() { res.end(); },
          })
        );
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
  });

  // Vite middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
