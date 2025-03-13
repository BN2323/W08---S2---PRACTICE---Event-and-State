import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [text, setText] = useState("");
  const [isTextEntered, setIsTextEntered] = useState(false);

  /* You will need a function to handle a key pressed on the first input and update the state*/
  function handleChange(event) {
    const newText = event.target.value;
    setText(newText);
    setIsTextEntered(newText.length > 0);
  }

  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input type="text" onChange={handleChange} />

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input type="text" value={isTextEntered ? text.toUpperCase() : ""} />
      </p>
    </main>
  );
}

export default App;
