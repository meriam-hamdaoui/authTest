import React from "react";
import imgHome from "../assets/home_page.png";
import imgHello from "../assets/hello.png";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation().pathname;
  return (
    <div>
      <img
        src={location === "/" ? imgHome : imgHello}
        alt="home page"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default LandingPage;
