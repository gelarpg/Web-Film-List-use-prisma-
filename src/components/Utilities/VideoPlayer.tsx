"use client";
import React, { useState } from "react";
import { LuX } from "react-icons/lu";
import YouTube from "react-youtube";

interface VideoPlayerProps {
  youtubeId: string;
}
const VideoPlayer = (props: VideoPlayerProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const { youtubeId } = props;
  const option = {
    height: "390",
    width: "640",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-white float-right bg-quaternary rounded-full"
          onClick={handleVideoPlayer}
        >
          <LuX size={24} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
          onError={( ) => alert('Video not play')}
        />
      </div>
    );
  };
  return isOpen ? (
    <Player />
  ) : (
    <button
      className="fixed bottom-5 right-5 w-32 bg-white rounded-lg hover:bg-primary transition-all hover:text-white border-none"
      onClick={handleVideoPlayer}
    >
      Tonton Player
    </button>
  );
};

export default VideoPlayer;
