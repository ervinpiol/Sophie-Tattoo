import React from "react";
import Intro from "../components/Pricing/Intro";
import Prices from "../components/Pricing/Prices";
import HowToGet from "../components/Pricing/HowToGet";

const Pricing = () => {
  return (
    <div
      id="intro"
      className="max-w-[1280px] mx-auto px-5 md:px-10 pt-[140px] md:pt-[216px] xl:pt-52 pb-16 md:pb-24 xl:pb-32"
    >
      <div className="flex flex-col gap-16 md:gap-24 xl:gap-[120px] max-w-[680px]">
        <Intro />
        <Prices />
        <HowToGet />
      </div>
    </div>
  );
};

export default Pricing;
