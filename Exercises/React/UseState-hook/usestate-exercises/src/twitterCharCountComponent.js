//Q. See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.
import { useState } from "react";

function TwitterCharCount() {
const totalCharAllowed = 50;
  const [charCount, setCharCount] = useState(0);
  const charTypeHandler = (event) => {
    setCharCount(totalCharAllowed - event.target.value.length);
  }

  return (<div className="App">
      <textarea onChange={charTypeHandler}></textarea>
      <p>{charCount} / {totalCharAllowed}</p>
    </div>);
}

export {TwitterCharCount};