import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
