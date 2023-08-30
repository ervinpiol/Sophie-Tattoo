import React, { useState } from "react";
import { motion } from "framer-motion";

import HoverImg from "../../assets/hover-img.webp";
import SWLLogo from "../../assets/swl-logo.svg";

const WithAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex gap-20 p-5 md:w-1/2 md:p-16">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <span>Studio Wanderland</span>
          <br />
          <span>Bloemgracht 89,</span>
          <br />
          <span>1016 KH</span>
          <br />
          <span>Amsterdam</span>
        </div>
        <a
          href="https://www.google.com/maps"
          target="_blank"
          className="pt-5 flex items-center gap-0.5 underline group"
        >
          Navigate{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
            className="transition-transform duration-500 ease-in-out -rotate-45 group-hover:rotate-0"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M9.854 3.146L14.207 7.5l-4.353 4.354l-.708-.708L12.293 8H1V7h11.293L9.146 3.854l.708-.708Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div className="hidden overflow-hidden xl:block">
        <div className="absolute overflow-hidden w-60">
          <motion.div
            className="relative h-[180px] object-cover object-left z-10 overflow-hidden"
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: isHovered ? "100%" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full">
              <img
                src={HoverImg}
                alt="HoverImg"
                className="absolute object-cover object-left w-full h-full"
              />
            </div>
            <div className="absolute top-4 left-4 w-28">
              <img src={SWLLogo} alt="SWLLogo" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WithAnimation;
