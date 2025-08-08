import express from "express";
import { createLead, getLeads } from "../controllers/Leadcontrollers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// public create
router.post("/", createLead);

// protected list (admin)
router.get("/", protect, getLeads);

export default router;
