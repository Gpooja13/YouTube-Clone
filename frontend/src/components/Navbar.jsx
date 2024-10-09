import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoVideocamOutline, IoSearchOutline } from "react-icons/io5";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSearchSuggestion,
  toggleSidebar,
} from "../utils/appSlice";
import { SUGGESTION_API } from "../constants/constant";
import axios from "axios";

export default function Navbar() {
  const [input, setInput] = useState("");
  const [showSearchSuggestion, setShowSearchSuggestion] = useState(false);

  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);

  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const searchVideo = (text) => {
    dispatch(setCategory(text));
  };

  const showSuggestion = async () => {
    try {
      const response = await axios.get(SUGGESTION_API + input);
      console.log(response.data);
      dispatch(setSearchSuggestion(response?.data[1]));
    } catch (error) {
      console.log("error:", error);
    }
  };

  const openSuggestion = () => {
    setShowSearchSuggestion(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, [200]);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

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
          <div className="flex w-[100%] ">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              className=" w-full outline-none py-2 px-1 border rounded-l-full border-gray-400"
              placeholder="Search"
              onFocus={openSuggestion}
            />
            <button
              onClick={() => searchVideo(input)}
              className="py-2 px-4 border border-gray-400 rounded-r-full"
            >
              <IoSearchOutline size={"24px"} className="cursor-pointer" />
            </button>
          </div>
          {showSearchSuggestion && searchSuggestion.length !== 0 && (
            <div className="absolute z-50 bg-white shadow-xl mt-12 top-3 w-[34%] pb-5 rounded-lg border border-gray-200">
              <ul>
                {searchSuggestion.map((item, index) => (
                  <div className="px-4 hover:bg-gray-100 flex items-center">
                    <IoSearchOutline
                      size={"24px"}
                      className="cursor-pointer text-gray-600"
                    />
                    <li
                      onClick={() => {
                        searchVideo(item);
                        setShowSearchSuggestion(false);
                      }}
                      className="px-2 py-1 cursor-pointer text-md font-medium"
                      key={index}
                    >
                      {item}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          )}
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
