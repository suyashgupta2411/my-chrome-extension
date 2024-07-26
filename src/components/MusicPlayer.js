import React, { useState } from "react";
import "../styles/MusicPlayer.css";
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById("audio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h1>Music Player</h1>
      <audio id="audio" src="your-music-file.mp3"></audio>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MusicPlayer;
