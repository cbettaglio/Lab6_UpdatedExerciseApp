// referenced class demos
import { useState } from "react";

export default function RepetitionExercise({ exercise, setLogbook }) {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  return (
    <>
      <h1>{exercise}</h1>
      <h2>Sets Completed:</h2>
      <p>{count2}</p>
      <button
        className="buttons"
        onClick={() => setCount2((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button className="buttons" onClick={() => setCount2((count2 = 0))}>
        Reset
      </button>
      <h2>Reps Completed:</h2>
      <p>{count}</p>
      <button
        className="buttons"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increment
      </button>
      <button className="buttons" onClick={() => setCount((count = 0))}>
        Reset
      </button>
      <br></br>
      <button
        className="buttons"
        onClick={() =>
          setLogbook((logbook) => [
            ...logbook,
            `Exercise: ${exercise} Sets Completed: ${count2} Reps Completed: ${count}`,
          ])
        }
      >
        Save
      </button>
    </>
  );
}
