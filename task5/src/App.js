import React, { useState, useRef } from "react";
import './App.css'; // Assuming this is the correct CSS file

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String((ms % 1000) / 10).padStart(2, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="time-display">{formatTime(time)}</div>
      <div className="controls">
        {!isRunning ? (
          <button className="start-btn" onClick={start}>Start</button>
        ) : (
          <button className="stop-btn" onClick={stop}>Stop</button>
        )}
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
