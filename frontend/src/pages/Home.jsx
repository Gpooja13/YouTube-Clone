import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <Sidebar />
      <Outlet/>
    </div>
  );
}
