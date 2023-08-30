import React from "react";
import { motion } from "framer-motion";

import TimeLogo from "../../../assets/About-Img/time.svg";
import VogueLogo from "../../../assets/About-Img/vogue.svg";
import GQLogo from "../../../assets/About-Img/gq.svg";
import ForbesLogo from "../../../assets/About-Img/forbes.svg";

const Text = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col xl:gap-5 text-LightGray h-full">
      <h1 className="h-[109px] md:h-[190px] xl:h-[284px] md:pl-16 xl:pl-[250px] overflow-hidden flex items-end light-bg h1-styles">
        BEYOND <br /> TATTOO
      </h1>
      <div className="xl:w-2/5 flex flex-col gap-8 md:gap-10 xl:gap-16 xl:h-[906px]">
        <div className="flex flex-col gap-6 md:gap-10 xl:gap-16">
          <motion.h2
            className="text-white h2-styles"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            About
          </motion.h2>
          <motion.div
            className="flex flex-col gap-6 md:gap-5 xl:gap-6 md:text-lg"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p>
              My name is Sophie Vermeulen and moving the needle is second nature
              to me. With a focus mainly on blackwork and dotwork, I create
              intricate and mesmerizing designs that push the boundaries of
              tattoo art.
            </p>
            <p>
              Over the years, my dedication to these styles has garnered me
              numerous awards, showcasing my artistic mastery and innovative
              approach.
            </p>
            <p>
              From the bustling streets of New York to the sun-soaked shores of
              Los Angeles and the vibrant city of Tokyo, I have traveled far and
              wide, leaving an indelible mark with my captivating blackwork and
              dotwork tattoos. Join me on this artistic journey and discover why
              my work resonates with ink enthusiasts worldwide.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 xl:gap-5">
          <p>Mentioned in</p>
          <div className="flex items-center h-8 gap-8 md:gap-10">
            <img src={TimeLogo} alt="TimeLogo" className="w-[53px] md:w-auto" />
            <img
              src={VogueLogo}
              alt="VogueLogo"
              className="w-[66px] md:w-auto"
            />
            <img src={GQLogo} alt="GQLogo" className="w-[39px] md:w-auto" />
            <img
              src={ForbesLogo}
              alt="ForbesLogo"
              className="w-[60px] md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
