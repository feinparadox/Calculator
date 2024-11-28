import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C",
  ];

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button key={index} onClick={() => handleButtonClick(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
