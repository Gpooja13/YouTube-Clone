import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../constants/constant";
import Avatar from "react-avatar";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import LiveChat from "../components/LiveChat";
import { setMessage } from "../utils/chatSlice";

export default function Watch() {
  const open = useSelector((store) => store.app.open);

  const [videoDetails, setVideoDetails] = useState(null);
  const [input, setInput] = useState("");

  const [searchParams] = useSearchParams();
  const searchId = searchParams.get("v");

  const dispatch = useDispatch();

  const getDetails = async () => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchId}&key=${API_KEY}`
      );
      setVideoDetails(response?.data?.items[0]);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const sendMessage = () => {
    dispatch(
      setMessage({
        name: "Priya",
        message: input,
      })
    );
    setInput("");
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div
      className={`relative float-right top-16 ${
        open ? "w-[82%]" : "w-[92%]"
      } border border-gray-300 mr-4`}
    >
      <div className="flex">
        <div className="w-[800px]">
          <iframe
            width="800"
            height="500"
            src={`https://www.youtube.com/embed/${searchId}?&autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <h1 className="font-bold mt-2 text-lg">
            {videoDetails?.snippet.title}
          </h1>

          <div className="flex items-center justify-between ">
            <div className="flex items-center justify-between w-[35%]">
              <div className="flex">
                <Avatar src="https://www.svgrepo.com/show/106359/avatar.svg" size={35} round={true} />
                <h1 className="font-medium ml-2">
                  {videoDetails?.snippet?.channelTitle}
                </h1>
              </div>
              <button className="px-4 py-1 font-medium bg-black text-white rounded-full">
                Subscribe
              </button>
            </div>
            <div className="flex items-center w-[42%] justify-between mt-2">
              <div className="flex items-center cursor-pointer bg-gray-300 px-4 py-2 rounded-full">
                <BiLike size="20px" className="mr-5" />
                <BiDislike size="20px" />
              </div>
              <div className="flex items-center cursor-pointer bg-gray-300 px-4 py-2 rounded-full">
                <PiShareFat size="20px" className="mr-2" />
                <span>Share</span>
              </div>
              <div className="flex items-center cursor-pointer bg-gray-300 px-4 py-2 rounded-full">
                <MdOutlineFileDownload size="20px" className="mr-2" />
                <span>Download</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-300 ml-3 w-full rounded-lg h-fit p-4 ">
          <div className="flex justify-between items-center w-full">
            <h1>Top Chat</h1>
            <BsThreeDotsVertical />
          </div>
          <div className="overflow-y-auto h-[28rem] flex flex-col-reverse thin-scrollbar">
            <LiveChat />
          </div>
          <div className="flex items-center justify-between border-t w-[94%]">
            <div className="flex m-2 items-center w-[90%]">
              <div><Avatar src="https://www.svgrepo.com/show/106359/avatar.svg" size={35} round={true} /></div>
              <input
                className="border-b outline-none border-gray-300 ml-2"
                value={input}
                type="text"
                placeholder="send message..."
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="bg-gray-200 cursor-pointer p-2 rounded-full">
                <VscSend size={"24px"} onClick={sendMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
