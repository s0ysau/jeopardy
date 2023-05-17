import { useState } from "react";

export default function Points({ jeopardy }) {
  const [points, setPoints] = useState(0);
  return (
    <h3>
      <span className="static-word">Points:</span>{" "}
      <span className="points">{points}</span>
    </h3>
  );
}
