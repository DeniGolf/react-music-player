import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className="song-container">
      <img
        src={currentSong.cover}
        style={
          isPlaying
            ? {
                animation: "rotate 15s linear infinite",
                animationPlayState: "unset",
              }
            : {
                animation: "rotate 15s linear infinite",
                animationPlayState: "paused",
              }
        }
      ></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
