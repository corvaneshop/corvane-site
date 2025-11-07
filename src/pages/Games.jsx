import React from "react";
import { Link } from "react-router-dom";
import gamesData from "../data/gamesData";
import "./Games.css";

const Games = () => {
    return (
        <div className="games-page">
            <h1 className="page-title">Case Files</h1>
            <div className="games-grid">
                {gamesData.map((game) => (
                    <div key={game.id} className="game-card">
                        <img src={game.image} alt={game.title} />
                        <div className="game-overlay">
                            <h2>{game.title}</h2>
                            <p>{game.description}</p>
                            <Link to={`/solutions/${game.id}`} className="play-btn">
                                Check Your Solution
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Games;
