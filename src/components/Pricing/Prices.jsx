import React from "react";
import { motion } from "framer-motion";

const Prices = () => {
  return (
    <motion.div
      className="flex flex-col gap-8 md:gap-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h4 className="text-xl font-Archivo xl:text-2xl">
        APPROXIMATE TATTOO PRICES
      </h4>
      <div className="md:text-lg text-Gray">
        <div className="flex justify-between md:justify-normal md:gap-20 py-3.5 xl:py-5 border-b">
          <p className="min-w-[320px]">Tiny tattoos (e.g. 2cm)</p>
          <span>€200+</span>
        </div>
        <div className="flex justify-between md:justify-normal md:gap-20 py-3.5 xl:py-5 border-b">
          <p className="min-w-[320px]">Small tattoos (e.g. 5cm)</p>
          <span>€350+</span>
        </div>
        <div className="flex justify-between md:justify-normal md:gap-20 py-3.5 xl:py-5 border-b">
          <p className="min-w-[320px]">Medium tattoos (e.g. forearm)</p>
          <span>€600+</span>
        </div>
        <div className="flex justify-between md:justify-normal md:gap-20 py-3.5 xl:py-5">
          <p className="min-w-[320px]">Big tattoos (e.g. back)</p>
          <span>€1000+</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Prices;
