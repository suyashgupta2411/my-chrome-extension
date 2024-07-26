import React, { useState, useEffect } from "react";
import "../styles/PomodoroTimer.css";

const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const percentage = (seconds / 1500) * 100;

  return (
    <div className="pomodoro-timer">
      <div className="controls">
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={() => setSeconds(1500)}>Reset</button>
      </div>
      <div className="timer">
        <svg className="timer-svg" viewBox="0 0 100 100">
          <circle className="timer-bg" cx="50" cy="50" r="45" />
          <circle
            className="timer-progress"
            cx="50"
            cy="50"
            r="45"
            strokeDasharray="282.6"
            strokeDashoffset={(1 - percentage / 100) * 282.6}
          />
        </svg>
        <div className="timer-text">{formatTime(seconds)}</div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
