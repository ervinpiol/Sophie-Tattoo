import React from "react";
import Text from "./Text";
import Image from "./Image";

const About = () => {
  return (
    <div className="text-white bg-DarkBlue xl:pb-16">
      <div className="w-full relative flex flex-col gap-16 md:gap-[120px] xl:block">
        <Text />
        <Image />
      </div>
    </div>
  );
};

export default About;
