import { useState } from "react";

export default function QuestionDisplay({ jeopardy }) {
  const [reveal, setReveal] = useState(false);

  return (
    <div>
      <button
        className="revealBtn"
        onClick={() => {
          setReveal(!reveal);
        }}
      >
        {reveal ? "Click to Hide Question" : "Click to Reveal Question"}
      </button>
      {jeopardy && jeopardy.answer && reveal ? (
        <p className="question">{jeopardy.answer}</p>
      ) : (
        ""
      )}
    </div>
  );
}
