import DurationExercise from "./components/stopWatch";
import LogBook from "./components/logBook";
import RepetitionExercise from "./components/reps";
import "./App.css";
import { useState } from "react";

const menuState = 0;
const durState = 1;
const repState = 2;
const logBook = 3;

function App() {
  let [logbook, setLogbook] = useState([]);
  let [exercise, setExercise] = useState(" ");
  let [curScreen, setCurScreen] = useState(menuState);
  let screen;
  if (curScreen === menuState) {
    screen = (
      <>
        <div className="elements">
          <h1>Let's get moving!</h1>
          <h2>Select an exercise:</h2>
          <button
            type="duration"
            className="buttons"
            onClick={() => {
              setCurScreen(durState);
              setExercise("Running");
            }}
          >
            Running
          </button>{" "}
          <br />
          <button
            type="duration"
            className="buttons"
            onClick={() => {
              setCurScreen(durState);
              setExercise("Plank");
            }}
          >
            Plank
          </button>
          <br />
          <button
            type="repetition"
            className="buttons"
            onClick={() => {
              setCurScreen(repState);
              setExercise("Push-ups");
            }}
          >
            Push-ups
          </button>
          <br />
          <button
            type="repetition"
            className="buttons"
            onClick={() => {
              setCurScreen(repState);
              setExercise("Squats");
            }}
          >
            Squats
          </button>
          <br />
          <h2>Review your progress:</h2>
          <button
            type="logbook"
            className="buttons"
            onClick={() => {
              setCurScreen(logBook);
            }}
          >
            Logbook
          </button>
        </div>
      </>
    );
  } else if (curScreen === durState) {
    screen = (
      <>
        <div className="elements">
          <DurationExercise exercise={exercise} setLogbook={setLogbook} />
          <button className="buttons" onClick={() => setCurScreen(menuState)}>
            Go Back
          </button>
        </div>
      </>
    );
  } else if (curScreen === repState) {
    screen = (
      <>
        <div className="elements">
          <RepetitionExercise exercise={exercise} setLogbook={setLogbook} />
          <button className="buttons" onClick={() => setCurScreen(menuState)}>
            Go Back
          </button>
        </div>
      </>
    );
  } else if (curScreen === logBook) {
    screen = (
      <>
        <div className="elements">
          <h1>Logbook</h1>
          <h2>Come here to see how far you've come!</h2>
          <LogBook exercise={exercise} logbook={logbook} />
          <br></br>
          <button className="buttons" onClick={() => setCurScreen(menuState)}>
            Go Back
          </button>
        </div>
      </>
    );
  }
  return screen;
}

export default App;
