import { useState } from "react";

export default function ScoreNPoints({ jeopardy }) {
  const [score, setScore] = useState(0);

  const handleScoreChange = (evt) => {
    if (evt.target.value === "decrease") {
      setScore(score - jeopardy.value);
    } else if (evt.target.value === "increase") {
      setScore(score + jeopardy.value);
    } else if (evt.target.value === "reset") {
      setScore(score * 0);
    }
  };

  return (
    <div>
      <h2>
        <span className="static-word">Score:</span>{" "}
        <span className="score">{score}</span>
      </h2>
      <span className="scoreBtns">
        <button
          onClick={handleScoreChange}
          value="decrease"
          className="decreaseBtn"
        >
          Decrease
        </button>
        <button
          onClick={handleScoreChange}
          value="increase"
          className="increaseBtn"
        >
          Increase
        </button>
        <button onClick={handleScoreChange} value="reset" className="resetBtn">
          Reset
        </button>
      </span>
    </div>
  );
}
