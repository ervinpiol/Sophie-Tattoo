import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqData } from "../../../data/faqData";

const QandA = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="xl:w-1/2">
      <motion.ul
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {faqData.map((data, index) => (
          <li
            key={index}
            className={`overflow-hidden ${index !== 5 ? "border-b" : ""}`}
          >
            <div
              className="flex items-center justify-between py-5 text-xl cursor-pointer md:text-2xl hover:opacity-70"
              onClick={() =>
                setSelectedItem(selectedItem === index ? null : index)
              }
            >
              <h4>{data.question}</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={`transition-transform duration-300 ease-in-out  ${
                  selectedItem === index && "rotate-45"
                }`}
              >
                <path
                  fill="currentColor"
                  d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z"
                />
              </svg>
            </div>
            <AnimatePresence>
              {selectedItem === index && (
                <>
                  <motion.p
                    className="md:text-lg text-Gray"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {data.answer}
                  </motion.p>
                  <span className="inline-block mt-5" />
                </>
              )}
            </AnimatePresence>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default QandA;
