import React from "react";
import Socials from "../components/Footer/Socials";
import Contact from "../components/Footer/Contact";
import Bottom from "../components/Footer/Bottom";

const Footer = () => {
  return (
    <div id="contact" className="bg-DarkBlue">
      <div className="max-w-[1280px] mx-auto text-LightGray pb-10 md:pb-24 xl:pb-[120px] pt-16 md:pt-[120px] xl:pt-[160px] px-5 md:px-10">
        <Contact />
        <Socials />
        <Bottom />
      </div>
    </div>
  );
};

export default Footer;
