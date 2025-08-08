import dotenv from "dotenv";
dotenv.config();

import app from "./App.js";
import connectDB from "./src/config/db.js";

import cors from "cors";
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true
}));


const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
  });

