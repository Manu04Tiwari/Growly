import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const lead = await Lead.create({ name, email, message });
    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
