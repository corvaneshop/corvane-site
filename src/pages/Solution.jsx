import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import gamesData from "../data/gamesData";
import "./Solution.css";

const Solution = () => {
  const { id } = useParams();
  const game = gamesData.find((g) => g.id === id);

  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState(null);

  if (!game) {
    return (
      <div className="solution-page">
        <h2>Case not found.</h2>
        <Link to="/games" className="back-btn">← Back to Cases</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === game.answer.toLowerCase()) {
      setStatus("correct");
    } else {
      setStatus("wrong");
    }
  };

  return (
    <div className="solution-page">
      <div className="solution-container">
        <h1>{game.title}</h1>
        <p className="case-desc">{game.description}</p>
        <div className="solution-image">
          <img src={game.image} alt={game.title} />
        </div>

        {/* ✅ Soru Alanı */}
        {status !== "correct" && (
          <form onSubmit={handleSubmit} className="solution-form">
            <label>{game.question}</label>
            <input
              type="text"
              placeholder="Type your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button type="submit">Check Solution</button>
          </form>
        )}

        {/* ⚠️ Yanlış cevap */}
        {status === "wrong" && (
          <p className="result wrong">❌ Try again, detective.</p>
        )}

        {/* ✅ Doğru cevap sonrası detaylı vaka özeti */}
        {status === "correct" && (
          <div className="case-solution">
            <h2>✅ Case Solved!</h2>
            <p><strong>Killer:</strong> {game.answer}</p>

            {game.caseDetails && (
              <>
                <h3>📍 Setting</h3>
                <p>{game.caseDetails.setting}</p>

                <h3>🕯️ Victim</h3>
                <p>{game.caseDetails.victim}</p>

                <h3>📜 Case Summary</h3>
                <p>{game.caseDetails.summary}</p>

                {game.caseDetails.clues && (
                  <>
                    <h3>🔍 Key Clues</h3>
                    <ul>
                      {game.caseDetails.clues.map((clue, index) => (
                        <li key={index}>{clue}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}

            {game.motive && (
              <>
                <h3>💭 Killer’s Motive</h3>
                <p>{game.motive}</p>
              </>
            )}

            <Link to="/games" className="back-btn">← Back to Cases</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Solution;
