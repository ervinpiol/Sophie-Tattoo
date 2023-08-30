import React from "react";
import { motion } from "framer-motion";

const Text = () => {
  return (
    <div className="max-w-[1280px] font-Archivo mx-auto">
      <div className="flex flex-col w-full gap-3 px-5 md:px-10 md:gap-5 xl:gap-4">
        <motion.p
          className="text-xl xl:text-2xl tracking-[-0.06em]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          HEY, I’M
        </motion.p>
        <motion.h2
          className="h2-styles"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Sophie <br /> Vermeulen
        </motion.h2>
        <div className="relative tracking-[-0.06em] md:pl-16 xl:pl-[250px] text-LightGray">
          <motion.h1
            className="h1-styles bg"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            TATTOO
            <br />
            ARTIST
          </motion.h1>
          <motion.p
            className="pl-32 xl:right-0 bottom-16 right-10 xl:bottom-24 text-xl xl:text-2xl leading-[0.8] md:pl-0 md:absolute"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            BASE IN <br />
            AMSTERDAM
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Text;
