"use client";

import { useRef, useState } from "react";

export default function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    videoRef.current?.play();
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl bg-ink">
      <video
        ref={videoRef}
        src="/images/ArawayGroupVideo.mp4"
        poster="/images/who-we-are.webp"
        controls={playing}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>

      {!playing && (
        <button
          type="button"
          onClick={play}
          aria-label="Play ARAMWAY GROUP overview video"
          className="absolute inset-0 flex items-center justify-center bg-ink/40 transition-colors hover:bg-ink/30"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-xl transition-transform hover:scale-110 sm:h-20 sm:w-20">
            <svg
              viewBox="0 0 24 24"
              fill="white"
              className="ml-1 h-7 w-7 sm:h-9 sm:w-9"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
