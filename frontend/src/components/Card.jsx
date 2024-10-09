import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { API_KEY } from "../constants/constant";

export default function Card({ items }) {
  const [icon, setIcon] = useState("");

  const channelName = async () => {
    const response = await axios(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${items.snippet.channelId}&key=${API_KEY}`
    );
    setIcon(response.data.items[0]?.snippet?.thumbnails.high.url);

    try {
    } catch (error) {}
  };

  useEffect(() => {
    channelName();
  }, []);

  return (
    <div className="cursor-pointer w-94 my-2">
      <img
        src={items.snippet.thumbnails.medium.url}
        alt="videocard"
        className="rounded-xl w-full"
      />
      <div>
        <div className="flex mt-2">
          <Avatar src={icon} size={35} round={true} />
          <div className="ml-2">
            <h1 className="font-bold">{items.snippet.title}</h1>
            <p className="text-sm text-gray-500">
              {items.snippet.channelTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
