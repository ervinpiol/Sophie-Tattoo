import React from "react";
import Text from "./Text";
import Slider from "./Slider";

const Intro = () => {
  return (
    <div className="pt-[140px] md:pt-[216px] pb-[264px] md:pb-[412px] xl:pb-[534px] relative">
      <Text />
      <Slider />
    </div>
  );
};

export default Intro;
