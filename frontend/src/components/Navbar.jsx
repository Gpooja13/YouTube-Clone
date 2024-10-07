import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import Avatar from "react-avatar";
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(true);

  const toggleHandler = () => {
    setOpen(false);
    
  };
  return (
    <div className="flex items-center justify-center fixed w-[100%] top-0 z-10 bg-white">
      <div className="flex w-[98%] justify-between px-5 py-2">
        <div className="flex items-center">
          <GiHamburgerMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={toggleHandler}
          />
          <img className="px-5" src="/logo.png" alt="logo" width={"140px"} />
        </div>
        <div className="flex items-center w-[40%]">
          <div className="w-[100%] py-2 px-1 border rounded-l-full border-gray-400">
            <input
              type="text"
              className=" w-full outline-none"
              placeholder="Search"
            />
          </div>
          <button className="py-2 px-4 border border-gray-400 rounded-r-full">
            <IoSearchOutline size={"24px"} className="cursor-pointer" />
          </button>
        </div>
        <div className="flex  w-[10%] justify-between items-center">
          <IoVideocamOutline size={"24px"} className="cursor-pointer" />
          <IoIosNotificationsOutline size={"24px"} className="cursor-pointer" />
          <Avatar
            src="https://www.svgrepo.com/show/26996/avatar.svg"
            size={35}
            round={true}
          />
        </div>
      </div>
    </div>
  );
}
