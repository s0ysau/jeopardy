import { useState } from "react";
import "./styles.css";
import QuestionBtn from "./components/QuestionBtn";
import DisplayAns from "./components/DisplayAns";
import Score from "./components/Score";
import QuestionDisplay from "./components/QuestionDisplay";
import Points from "./components/Points";
import UserAns from "./components/UserAns";

export default function App() {
  const [jeopardy, setJeopardy] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const url = "https://jservice.io/api/random";

  const getJeopardy = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJeopardy(data[0]);
      setCategory(data[0].category.title);
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="App">
      <h1 className="welcome">Welcome To Jeopardy!</h1>
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
      <Score jeopardy={jeopardy} />
      <h2 className="static-word">Let's Play</h2>
      <QuestionBtn jeopardy={jeopardy} questionSearch={getJeopardy} />
      <h3 className="static-word">
        Category: <span className="answer">{category}</span>
      </h3>
      <Points />
      <DisplayAns jeopardy={jeopardy} />
      {/* <UserAns jeopardy={jeopardy} answerCompare={getJeopardy} /> */}
      <QuestionDisplay jeopardy={jeopardy} />
    </div>
  );
}