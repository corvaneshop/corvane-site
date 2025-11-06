import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/games"); // 🔹 Artık basename otomatik eklenecek: /corvane-site/games
  };

  return (
    <div className="home-page">
      <HeroSection />
      <section className="intro-text">
        <h2>Immersive Detective Experiences</h2>
        <p>
          We create printable mystery and escape games that challenge your logic,
          awaken your intuition, and pull you into stories you won’t forget.
        </p>
        <button className="explore-btn" onClick={handleExploreClick}>
          Explore Games
        </button>
      </section>
    </div>
  );
};

export default Home;
