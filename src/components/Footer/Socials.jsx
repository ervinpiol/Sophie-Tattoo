import React from "react";
import { motion } from "framer-motion";
import WithAnimation from "./WithAnimation";

const Socials = () => {
  return (
    <motion.div
      className="relative flex flex-col bg-LightBlue md:text-lg xl:gap-60 md:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <WithAnimation />
      <div className="flex flex-col gap-5 p-5 border-t md:items-end md:w-1/2 md:p-16 md:border-t-0 md:border-l border-Gray">
        {["Instagram", "Tiktok", "Facebook"].map((social, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center gap-0.5 underline group"
          >
            {social}
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
        ))}
      </div>
    </motion.div>
  );
};

export default Socials;
