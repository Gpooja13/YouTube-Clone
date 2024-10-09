import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constants/constant";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function VideoContainer() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(YOUTUBE_VIDEO_API);
      setVideos(response?.data?.items);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {videos.map((items) => {
        return (
          <Link key={items.id} to={`/watch?v=${items.id}`}>
            <Card key={items.id} items={items} />
          </Link>
        );
      })}
    </div>
  );
}
