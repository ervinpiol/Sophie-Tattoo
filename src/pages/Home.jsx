import React from "react";
import Intro from "../components/Home/Intro/Intro";
import About from "../components/Home/About/About";
import Works from "../components/Home/Works";
import Faq from "../components/Home/Faq/Faq";

const Home = () => {
  return (
    <div id="intro">
      <Intro />
      <About />
      <Works />
      <Faq />
    </div>
  );
};

export default Home;
