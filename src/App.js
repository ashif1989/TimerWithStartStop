import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(true);
  const [maxTimer, setMaxTimer] = useState(0);

  useEffect(() => {
    let intervalTimer = setInterval(() => {
      if (start) {
        setTimer((timer) => timer + 1);
      }

      if (timer >= maxTimer) {
        setTimer(0);
      }
    }, 1000);

    return () => clearInterval(intervalTimer);
  }, [timer]);

  let handleStart = (maxvalue) => {
    setStart(true);
    setTimer((timer) => timer + 1);
    setMaxTimer(maxvalue);
  };

  let handleStop = () => {
    setStart(false);
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      <p>{timer}</p>
      <button onClick={() => handleStart(10)}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
