import React from "react";
import { FaEdit, FaRobot, FaRocket } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    { icon: <FaEdit />, title: "Input", desc: "Tell us about your product." },
    { icon: <FaRobot />, title: "AI", desc: "Growly generates ad creatives." },
    { icon: <FaRocket />, title: "Output", desc: "Launch high-converting ads!" }
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, idx) => (
          <div key={idx} className="step">
            {step.icon}
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
