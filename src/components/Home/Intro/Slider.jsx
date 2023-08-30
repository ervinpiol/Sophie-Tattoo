import React from "react";
import { motion } from "framer-motion";
import useSliderAnimation from "../../../hooks/useSliderAnimation";
import { sliderImages } from "../../../data/sliderImages";

const Slider = () => {
  const refs = useSliderAnimation(window.innerWidth > 1280 ? 0.01 : 0.06);

  return (
    <motion.div
      className="absolute bottom-10 md:bottom-24 xl:bottom-[120px]"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="overflow-x-hidden">
        <div className="relative flex flex-nowrap w-[1000%] z-[1]">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (refs.current[i] = el)}
              className="flex gap-5 pr-5"
            >
              {sliderImages.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt="image"
                  className="md:h-[340px] w-[272px] md:w-[600px] xl:h-[450px]"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Slider;
