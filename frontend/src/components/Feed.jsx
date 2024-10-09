import React from "react";
import VideoContainer from "./VideoContainer";
import Suggestions from "./Suggestions";
import {useSelector} from "react-redux";

export default function Feed() {
  const open = useSelector((store) => store.app.open);

  return (
    <div className={`relative float-right top-16 ${open?"w-[82%]":"w-[92%]"} border border-gray-300 mr-4`}>
      <Suggestions/>
      <VideoContainer />
    </div>
  );
}
