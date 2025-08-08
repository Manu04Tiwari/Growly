import User from "../models/User.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || "7d" });

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      return next(new Error("Email and password are required"));
    }

    const existing = await User.findOne({ email });
    if (existing) {
      res.status(400);
      return next(new Error("User already exists"));
    }

    const user = await User.create({ name, email, password });

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        email: user.email,
        token: generateToken(user._id)
      }
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        data: {
          id: user._id,
          email: user.email,
          token: generateToken(user._id)
        }
      });
    } else {
      res.status(401);
      next(new Error("Invalid credentials"));
    }
  } catch (err) {
    next(err);
  }
};
