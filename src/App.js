import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [timerEnd, setTimerEnd] = useState(0);
  const [timerStop, setTimerStop] = useState(0);
  const [timerStopFlag, setTimerStopFlag] = useState(false);

  useEffect(() => {
    const clearTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    if (timer > timerEnd) {
      setTimer(0);
    }

    return () => clearInterval(clearTimer);
  }, [timer]);

  const handleStart = (end) => {
    timerStopFlag ? setTimer(timerStop) : setTimer((timer) => timer + 1);
    setTimerEnd(end);
    setTimerStopFlag(false);
  };

  const handleStop = () => {
    setTimerStop(timer);
    setTimerStopFlag(true);
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      {timerStopFlag ? timerStop : timer}
      <button onClick={() => handleStart(5)}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
