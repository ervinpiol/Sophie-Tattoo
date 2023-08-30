import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

const Bottom = () => {
  return (
    <motion.div
      className="flex justify-between text-sm px-5 md:px-16 pt-8 md:pt-16 leading-[1.025] flex-col md:flex-row gap-6 xl:gap-0"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex items-end gap-2.5">
        <RouterLink to="/pricing" className="underline hover:no-underline">
          Pricing
        </RouterLink>
        <span>•</span>
        <Link
          smooth={true}
          to="intro"
          className="underline hover:no-underline group flex gap-1 pb-[1px] overflow-hidden cursor-pointer"
        >
          <span className="">Back to top</span>
          <div className="relative transition-all duration-300 ease-in-out group-hover:-translate-y-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 20 20"
            >
              <g transform="rotate(-90 10 10)">
                <path
                  fill="currentColor"
                  d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 20 20"
              className="absolute"
            >
              <g transform="rotate(-90 10 10)">
                <path
                  fill="currentColor"
                  d="m16.172 9l-6.071-6.071l1.414-1.414L20 10l-.707.707l-7.778 7.778l-1.414-1.414L16.172 11H0V9z"
                />
              </g>
            </svg>
          </div>
        </Link>
      </div>
      <p>Copyright © 2023 Sophie Vermeulen</p>
    </motion.div>
  );
};

export default Bottom;
