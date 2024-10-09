import React from "react";
import ChatMessage from "./ChatMessage";
import { useSelector } from "react-redux";

export default function () {
  const message = useSelector((store) => store.chat.message);

  return (
    <div className="px-4 py-1">
      <div>
        {message.map((item) => {
          return <ChatMessage name={item.name} msg={item.message}/>;
        })}
      </div>
    </div>
  );
}
