import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI not set in .env");
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  return conn;
};

export default connectDB;
