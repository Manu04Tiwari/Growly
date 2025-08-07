import React from "react";
import "./FeaturesSection.css";

const features = [
  {
    title: "AI-Powered Ad Copy",
    description: "Generate catchy headlines and persuasive text with just one click.",
    icon: "🧠",
  },
  {
    title: "High-Converting Designs",
    description: "Pre-tested layouts that convert viewers into buyers.",
    icon: "🎯",
  },
  {
    title: "One-Click Export",
    description: "Download creatives in multiple formats instantly.",
    icon: "⚡",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2 className="features-heading">Powerful Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
