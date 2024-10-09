import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { setCategory } from "../utils/appSlice";

export default function Suggestions() {
  const suggestItem = [
    "All",
    "Javascript",
    "Java",
    "Live",
    "Music",
    "Songs",
    "Vlogs",
    "Travel",
    "News",
    "Sports",
    "Movies",
    "Trailer",
    "Gaming",
    "Nature",
  ];

  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
     dispatch(setCategory(tag));
     setActive(tag)
    }
  };

  return (
    <div className="py-2 flex w-full overflow-x-scroll no-scrollbar">
      {suggestItem.map((item, index) => {
        return (
          <div key={index}>
            <span className="whitespace-nowrap">
              <button
                onClick={() => videoByTag(item)}
                className={`${
                  active === item ? "bg-slate-900 text-white" : "bg-gray-200"
                } mx-2 px-4 font-medium py-1 rounded-lg`}
              >
                {item}
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
}
