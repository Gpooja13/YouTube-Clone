import React from "react";
import VideoContainer from "./VideoContainer";
import Suggestions from "./Suggestions";

export default function Feed() {
  return (
    <div className="relative float-right top-16 w-[82%] border border-gray-300">
      <Suggestions/>
      <VideoContainer />
    </div>
  );
}
