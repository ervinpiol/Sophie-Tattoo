import React from "react";
import { motion } from "framer-motion";
import Arrow from "../../assets/arrow.svg";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col gap-6 md:gap-10 xl:gap-16">
        <motion.h2
          className="text-white h2-styles "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Contact
        </motion.h2>
        <div className="flex flex-col gap-4 md:gap-6">
          <motion.p
            className="text-xl text-white md:text-2xl md:w-2/3 xl:w-1/3"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Are you ready to create something extraordinary together?
          </motion.p>
          <motion.a
            href="mailto:sophie@vermeulen.art"
            className="text-YellowGreen font-Archivo text-xl md:text-[40px] leading-none underline pb-5 flex gap-1 uppercase xl:gap-3 tracking-[-0.06em] hover:no-underline group"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            sophie@vermeulen.art
            <img
              src={Arrow}
              alt="Arrow"
              className="w-[19px] transition-transform md:w-[37px] group-hover:rotate-45 duration-500 ease-in-out"
            />
          </motion.a>
        </div>
      </div>
      <h1 className="h-[162px] md:h-[190px] xl:h-[284px] md:pl-16 xl:pl-[250px] dark-bg h1-styles">
        JOIN <br className="md:hidden" /> THE <br />
        LEGACY
      </h1>
    </>
  );
};

export default Contact;
