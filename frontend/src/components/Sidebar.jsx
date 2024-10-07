import React from "react";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

const Sidebar = () => {
  const sidebarContent = [
    { icons: <MdHome size={"30px"} />, title: "Home" },
    { icons: <SiYoutubeshorts size={"24px"} />, title: "Shorts" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
    { icons: <MdSubscriptions size={"24px"} />, title: "Subscription" },
  ];
  return (
    <div className="border border-gray-200 w-[15%] ml-3 mt-4 h-[calc(100vh-4.625rem)] absolute top-14 overflow-x-hidden overflow-y-auto">
      {sidebarContent.map((item, index) => {
        return (
          <div key={index} className="m-5 flex w-[100%]">
            <span>{item.icons}</span>
            <p className="ml-5">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
