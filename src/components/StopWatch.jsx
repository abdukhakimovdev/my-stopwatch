import React, { useState, useRef } from "react";
import "./StopWatch.css";


function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  // Start & Stop funksiyasi
  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  // Reset funksiyasi
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  // Lap qo‘shish funksiyasi
  const handleLap = () => {
    setLaps([...laps, time]);
  };

  // Vaqt formatlash funksiyasi
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")},${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <h1 className="display">{formatTime(time)}</h1>
        <div className="controls">
          <button onClick={handleStartStop} className={isRunning ? "stop" : "start"}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button onClick={handleReset} className="reset">Reset</button>
          <button onClick={handleLap} className="lap" disabled={!isRunning}>
            Lap
          </button>
        </div>
        <ul className="laps">
          {laps.map((lap, index) => (
            <li key={index}>Lap {index + 1}: {formatTime(lap)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StopWatch;
