import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10 xl:gap-16">
      <motion.h2
        className="h2-styles"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Pricing
      </motion.h2>
      <motion.p
        className="text-xl md:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        The price of a tattoo is highly individual, and I will be able to
        provide you with the exact price after our first consultation. The price
        depends on factors such as the motif, size, and your body proportions.
        Below, you can find approximate prices, but please note that they are
        just rough estimates.
      </motion.p>
    </div>
  );
};

export default Intro;
