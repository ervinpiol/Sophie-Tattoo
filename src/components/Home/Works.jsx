import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { worksData } from "../../data/worksData";

const Works = () => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-16 xl:pt-[164px] md:pt-[120px] pb-10 md:pb-16 xl:pb-24">
        <motion.h2
          className="h2-styles"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Selected <br /> Work
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 md:gap-5">
        {worksData.map((data, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden group"
            onMouseEnter={() => setIsHovered(i)}
            onMouseLeave={() => setIsHovered(null)}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <img
              src={data.image}
              alt={data.name}
              className="w-full transition-all duration-700 ease-in-out group-hover:scale-110"
            />
            <AnimatePresence>
              {isHovered === i && (
                <motion.p
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 rounded-full px-6 py-[11px] text-sm pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {data.name}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Works;
