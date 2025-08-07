import React, { useState } from "react";
import { toast } from "react-toastify";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill all required fields!");
      return;
    }

    // Connect to backend later
    toast.success("Demo request submitted!");
    setFormData({ name: "", email: "", phone: "", businessType: "", message: "" });
  };

  return (
    <section id="lead-form" className="lead-form">
      <h2>Book a Free Demo</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input name="phone" type="number" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        <select name="businessType" value={formData.businessType} onChange={handleChange}>
          <option value="">Select Business Type</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Coach">Coach</option>
          <option value="Ecommerce">Ecommerce</option>
          <option value="SMB">Small Business</option>
        </select>
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default LeadForm;
