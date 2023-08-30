import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Logo from "../assets/logo.webp";

const Header = () => {
  return (
    <div className="fixed z-10 w-full">
      <div className="flex items-center justify-between w-full px-5 pt-5 md:px-10 md:pt-8">
        <RouterLink to="/">
          <img src={Logo} alt="Logo" className="rounded-full w-14 md:w-16" />
        </RouterLink>
        <div className="flex items-center gap-6 md:bg-white rounded-full p-1 md:pl-[15px]">
          <div className="items-center hidden gap-1 md:flex">
            <div className="flex items-center justify-center w-[18px] h-[18px]">
              <motion.div
                className="w-4 h-4 rounded-full bg-LightGray"
                initial={{ scale: 0.6 }}
                animate={{ scale: 0.8 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute w-4 h-4 bg-opacity-25 rounded-full bg-LightGray"
                initial={{ scale: 0.6 }}
                animate={{ scale: 1.2 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
              />
            </div>
            <p className="text-sm text-Gray">Bookings open</p>
          </div>
          <Link
            smooth={true}
            to="contact"
            className="bg-YellowGreen font-Archivo cursor-pointer text-sm px-6 pt-3 pb-2.5 rounded-full"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
