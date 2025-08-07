import React from "react";
import { FaMagic, FaFont, FaFileExport } from "react-icons/fa";

const Features = () => {
  const features = [
    { icon: <FaMagic />, text: "AI Creative Generator" },
    { icon: <FaFont />, text: "Headline Optimizer" },
    { icon: <FaFileExport />, text: "Export Ad Formats" }
  ];

  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="features-list">
        {features.map((feature, idx) => (
          <div key={idx} className="feature">
            {feature.icon}
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
