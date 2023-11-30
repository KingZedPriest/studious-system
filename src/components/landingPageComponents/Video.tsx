"use client";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

//Import Images and Videos

const VideoSection = () => {
  return (
    <main className="my-10 px-4 sm:px-6 lg:px-8 rounded-lg w-[80%]">
      <CldVideoPlayer
        width="600"
        height="50"
        src="video/fkn2qz2akjz8bncai0y7"
      />
    </main>
  );
};

export default VideoSection;
