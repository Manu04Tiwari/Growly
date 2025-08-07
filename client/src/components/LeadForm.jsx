import React, { useState } from "react";
import { toast } from "react-toastify";
import "./LeadForm.css"; 

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error on typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please correct the errors!");
      return;
    }

    toast.success("Demo request submitted!");
    setFormData({ name: "", email: "", phone: "", businessType: "", message: "" });
    setErrors({});
  };

  return (
    <section id="lead-form" className="lead-form">
      <h2>Book a Free Demo</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone (10 digits)"
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
        >
          <option value="">Select Business Type</option>
          <option value="Freelancer">Freelancer</option>
          <option value="Coach">Coach</option>
          <option value="Ecommerce">Ecommerce</option>
          <option value="SMB">Small Business</option>
        </select>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default LeadForm;
