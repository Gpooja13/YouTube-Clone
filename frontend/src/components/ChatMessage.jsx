import React from "react";
import Avatar from "react-avatar";

export default function ({item}) {
  return (
    <div className="flex items-center my-3">
      <div>

      <Avatar src="https://www.svgrepo.com/show/106359/avatar.svg" size={35} round={true} />
      </div>
      <div className="flex items-center">
        <h1 className="ml-2 font-medium text-sm">{item.name}</h1>
        <p className="ml-2 py-2 text-sm">{item.message}</p>
      </div>
    </div>
  );
}
