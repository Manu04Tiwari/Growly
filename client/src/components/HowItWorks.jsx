import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: "Step 1: Input Ad Details",
    desc: "Provide your product, service, and target audience details.",
    icon: "📝",
  },
  {
    title: "Step 2: Generate Ad Creatives",
    desc: "Our AI generates multiple ad creatives instantly.",
    icon: "⚙️",
  },
  {
    title: "Step 3: Launch & Analyze",
    desc: "Use the creatives and track results with ease.",
    icon: "🚀",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="how-cards">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            <div className="how-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

