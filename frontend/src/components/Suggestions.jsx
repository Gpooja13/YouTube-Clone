import React from "react";

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
  ];
  return (
    <div className="py-2">
      {suggestItem.map((item, index) => {
        return (
          <button key={index} className="bg-gray-200 mx-2 px-4 font-medium py-1 rounded-lg">
            {item}
          </button>
        );
      })}
    </div>
  );
}
