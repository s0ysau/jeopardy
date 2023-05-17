import { useState } from "react";

export default function QuestionBtn(props) {
  const [card, setCard] = useState("");

  const handleClick = (evt) => {
    setCard(evt.target.value);
  };

  return (
    <div>
      <form
        onClick={(evt) => {
          evt.preventDefault();
          props.questionSearch(card);
        }}
      >
        <button onClick={handleClick} value={card} className="getQuestionBtn">
          Get Question
        </button>
      </form>
    </div>
  );
}
