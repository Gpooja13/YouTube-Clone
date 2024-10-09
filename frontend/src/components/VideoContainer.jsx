import React, { useEffect } from "react";
import axios from "axios";
import { API_KEY, YOUTUBE_VIDEO_API } from "../constants/constant";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../utils/appSlice";

export default function VideoContainer() {
  const dispatch = useDispatch();
  const { videos = [], category } = useSelector((store) => store.app);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(YOUTUBE_VIDEO_API);
      dispatch(setHomeVideo(response?.data?.items));
    } catch (error) {
      console.log("error:", error);
    }
  };

  const fetchVideosByTag = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${category}&type=video&key=${API_KEY}`
      );
      dispatch(setHomeVideo(response.data.items));
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      fetchVideos();
    } else fetchVideosByTag();
  }, [category]);

  return (
    <div className="grid grid-cols-3 gap-3">
      {videos.map((items,index) => {
        return (
          <Link
          //   key={`${
          //     typeof items.id === "object" ? items.id.videoId : items.Id
          //   }`}
          //   to={`/watch?v=${
          //     typeof items.id === "object" ? items.id.videoId : items.Id
          //   }`}
          // >
          key={index}
            to={`/watch?v=${
              typeof items.id === "object" ? items.id.videoId : items.Id
            }`}
          >
            <Card items={items} />
          </Link>
        );
      })}
    </div>
  );
}
