export default function DisplayAns({ jeopardy }) {
  return (
    <>
      <h3>
        <span className="static-word">Answer:</span>{" "}
        <span className="answer">{jeopardy.question}</span>
      </h3>
    </>
  );
}