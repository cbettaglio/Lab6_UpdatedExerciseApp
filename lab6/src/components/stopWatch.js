// referenced class demos
import React, { useCallback, useEffect, useState } from "react";
let currentTimer = 0;

export default function DurationExercise({ exercise, setLogbook }) {
  let [running, setRunning] = useState(false);
  let [timer, setTimer] = useState(0);
  let updateTimer = useCallback(() => {
    if (running) {
      setTimer((timer) => timer + 10);
    }
  }, [running]);
  useEffect(() => {
    currentTimer = setInterval(updateTimer, 10);
    return () => clearInterval(currentTimer);
  }, [running, updateTimer]);
  let startStop = useCallback(() => {
    console.log("used startStop");
    setRunning(!running);
    clearInterval(currentTimer);
  }, [running]);
  let reset = useCallback(() => {
    setTimer(0);
    setRunning(false);
    clearInterval(currentTimer);
  }, []);
  let mins = Math.floor((timer / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  let secs = Math.floor((timer / 1000) % 60)
    .toString()
    .padStart(2, "0");
  let mills = (timer % 1000).toString().padStart(3, "0");
  let formaterTimer = `${mins}:${secs}.${mills}`;
  return (
    <div>
      <h1>{exercise}</h1>
      <h2>Timer:</h2>
      <h2>
        {mins}:{secs}.{mills}
      </h2>
      <button className="buttons" onClick={startStop}>
        {running ? "Pause" : "Start"}
      </button>
      <button className="buttons" onClick={reset}>
        {" "}
        Reset{" "}
      </button>
      <button
        className="buttons"
        onClick={() =>
          setLogbook((logbook) => [
            ...logbook,
            `Exercise: ${exercise} Time Completed: ${formaterTimer}`,
          ])
        }
      >
        Save
      </button>
    </div>
  );
}
