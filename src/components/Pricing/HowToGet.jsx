import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HowToGet = () => {
  return (
    <motion.div
      className="flex flex-col gap-8 md:gap-6 xl:gap-10"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h4 className="text-xl font-Archivo xl:text-2xl">
        HOW TO GET EXACT TATTOO PRICE?​
      </h4>
      <div className="flex flex-col gap-4 md:text-lg text-Gray">
        <div className="flex gap-3">
          <div>
            <span className=" rounded-full  bg-LightGray flex justify-center items-center w-[26px] md:w-8 h-[26px] md:h-8  text-black text-sm font-Archivo">
              1
            </span>
          </div>
          <p>
            Send me an email that you find in the{" "}
            <Link
              to="contact"
              smooth={true}
              className="underline cursor-pointer hover:no-underline"
            >
              contact section
            </Link>
          </p>
        </div>
        <div className="flex gap-3">
          <div>
            <span className=" rounded-full  bg-LightGray flex justify-center items-center w-[26px] md:w-8 h-[26px] md:h-8  text-black text-sm font-Archivo">
              2
            </span>
          </div>
          <p>I will send you possible dates for the consultation</p>
        </div>
        <div className="flex gap-3">
          <div>
            <span className=" rounded-full  bg-LightGray flex justify-center items-center w-[26px] md:w-8 h-[26px] md:h-8  text-black text-sm font-Archivo">
              3
            </span>
          </div>
          <p>
            After the first consultation, I will be able to send you the exact
            price depending on our agreement
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HowToGet;
