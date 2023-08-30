import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import QandA from "./QandA";

const Faq = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-5 md:px-10 md:pt-[120px] xl:pt-36 md:pb-24 xl:pb-[120px] py-16">
      <div className="flex flex-col gap-8 md:gap-10 xl:gap-60 xl:flex-row">
        <div className="flex flex-col gap-6 md:gap-10 xl:gap-16 xl:w-1/2">
          <motion.h2
            className="h2-styles"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Faq
          </motion.h2>
          <motion.p
            className="md:text-lg text-Gray"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            As a tattoo artist, I often receive inquiries from clients regarding
            their tattoos,{" "}
            <Link to="/pricing" className="underline hover:no-underline">
              pricing
            </Link>{" "}
            or the process of booking an appointment. To help address these
            common queries, I have compiled a list of frequently asked
            questions. If you have any additional inquiries, please don't
            hesitate to reach out to me.
          </motion.p>
        </div>
        <QandA />
      </div>
    </div>
  );
};

export default Faq;
