import Lead from "../models/Lead.js";

/**
 * Create a lead (open endpoint)
 */
export const createLead = async (req, res, next) => {
  try {
    const { name, email, phone, businessType, message } = req.body;
    if (!name || !email) {
      res.status(400);
      return next(new Error("Name and email are required"));
    }

    const lead = await Lead.create({ name, email, phone, businessType, message });
    res.status(201).json({ success: true, data: lead });
  } catch (err) {
    next(err);
  }
};

/**
 * Optional: get all leads (protected)
 */
export const getLeads = async (req, res, next) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({ success: true, data: leads });
  } catch (err) {
    next(err);
  }
};
