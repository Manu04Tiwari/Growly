import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import leadRoutes from "./src/routes/LeadRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import { notFound, errorHandler } from "./src/middleware/errorMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

// health
app.get("/", (req, res) => res.send("Growly Backend is up"));

// Error handlers
app.use(notFound);
app.use(errorHandler);

export default app;
