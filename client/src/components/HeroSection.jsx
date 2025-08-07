import React from "react";
import "./HeroSection.css"; 

const HeroSection = () => {
  return (
    <section className="hero-section">
      
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="hero-content">
        <h1>Growly</h1>
        <h2> Create High-Converting Ads in Seconds — Powered by AI</h2>
        <p>No design or copywriting needed. Just enter your product and let Growly do the rest.</p>
        <button
        className="hero-button"
  onClick={() => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Book a Free Demo
</button>
      </div>
    </section>
  );
};

export default HeroSection;
