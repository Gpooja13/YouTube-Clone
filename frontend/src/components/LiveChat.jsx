import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../utils/chatSlice";

export default function () {
  const message = useSelector((store) => store.chat.message);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setMessage({ name: "Patel", message: "random" }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pr-5">
      <div>
        {message.map((item, index) => {
          return <ChatMessage key={index} item={item} />;
        })}
      </div>
    </div>
  );
}
