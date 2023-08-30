import React from "react";
import { motion } from "framer-motion";
import useSliderAnimation from "../../../hooks/useSliderAnimation";

import Img from "../../../assets/About-Img/img.webp";
import Polygon from "../../../assets/polygon.svg";

const Image = () => {
  const refs = useSliderAnimation(0.1);

  return (
    <motion.div
      className="flex gap-[240px] bottom-14 xl:absolute w-full h-[400px] md:h-[720px] xl:h-[906px] pointer-events-none"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="hidden w-1/2 z-[-100] xl:block" />
      <div className="relative w-full h-full overflow-hidden pointer-events-auto xl:w-1/2">
        <img
          src={Img}
          alt="Img"
          className="h-full object-center object-cover w-full z-[1]"
        />
        <div className="absolute bottom-40 -left-20 lg:bottom-10 -rotate-[25deg] xs:left-0 sm:left-28 lg:left-60 xl:-left-20">
          <div className="flex py-1 bg-YellowGreen md:py-2 whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                className="z-10 font-Archivo uppercase flex items-center border-y-2 border-DarkBlue py-1.5 md:py-2.5 gap-3 pr-8 md:gap-5 md:pr-10"
              >
                <img src={Polygon} alt="Polygon" className="w-4" />
                <p className="text-DarkBlue text-xl md:text-2xl tracking-[-0.06em]">
                  12 years in the business
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Image;
