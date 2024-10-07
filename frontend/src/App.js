import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Feed />
    </div>
  );
};

export default App;
