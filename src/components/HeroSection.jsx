import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">CORVANE</h1>
        <p className="hero-subtitle">Where every mystery finds its truth</p>
        <a href="/games" className="hero-button">Enter the Files</a>
      </div>
    </section>
  );
};

export default HeroSection;
