import "./styles.css";
import React from "react";
import { useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const startTimer = () => {
    setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    document.querySelector(".start-button").setAttribute("disabled", "true");
    document.querySelector(".stop-button").removeAttribute("disabled");

    const startButton = document.querySelector(".start-button");

    startButton.addEventListener("click", () => {
      if (startButton.innerText === "start") {
        startButton.innerText = "stop";
      } else {
        startButton.innerText = "start";
      }
    });
  };

  const stopTimer = () => {
    clearInterval(setSeconds(0));
    if (!!document.querySelector("#counter")) {
      document.querySelector("#counter").remove();
    }
    document.querySelector(".stop-button").setAttribute("disabled", "true");
    document.querySelector(".start-button").removeAttribute("disabled");
  };

  const currentCount = seconds;

  return (
    <div className="counter-container">
      <p id="counter">{currentCount}</p>
      <button className="start-button" onClick={startTimer}>
        start
      </button>
      <button className="stop-button" onClick={stopTimer}>
        stop
      </button>
    </div>
  );
}
