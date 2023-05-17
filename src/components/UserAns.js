import { useState } from "react";

export default function UserAns(jeopardy) {
  const [compareAns, setCompareAns] = useState("");

  const handleChange = (evt) => {
    setCompareAns(evt.target.value);
  };

  return (
    <>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          jeopardy.answerCompare(compareAns);
        }}
      >
        <input type="text" onChange={handleChange} value={compareAns} />
        <input type="submit" value="submit"></input>
      </form>
    </>
  );
}
