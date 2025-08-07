import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Create High-Converting Ads in Seconds — Powered by AI</h1>
      <p>No design or copywriting needed. Just enter your product and let Growly do the rest.</p>
      <button onClick={() => document.getElementById('lead-form').scrollIntoView({ behavior: 'smooth' })}>
        Book Free Demo
      </button>
    </section>
  );
};

export default HeroSection;
