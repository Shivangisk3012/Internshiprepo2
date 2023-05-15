import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Toggles from "../Components/Toggles";

const Badgepage = () => {
  const location = useLocation();
  const title = getTitle(location.pathname);

  function getTitle(pathname) {
    switch (pathname) {
      case "/":
        return "Earn a badge";
      case "/popular":
        return "Popular Badges";
      case "/ongoing":
        return "Ongoing Badges";
      case "/earned":
        return "Earned Badges";
      default:
        return "Not Found";
    }
  }

  // console.log(title);

  return (
    <div className="h-full w-[75%] pt-16 mx-auto">
      <Header title={title} />
      <Toggles/>
      <Outlet />
    </div>
  );
};

export default Badgepage;
