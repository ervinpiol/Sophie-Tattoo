import React from "react";
import { useLocation } from "react-router-dom";
import BGPattern from "../assets/bg-pattern.svg";

const Background = () => {
  const location = useLocation();
  const numRows = location.pathname === "/pricing" ? 12 : 25;

  return (
    <div className="overflow-hidden">
      <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center pt-8 gap-24 md:gap-36 lg:gap-[200px] select-none pointer-events-none z-[-1]">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`${i % 2 !== 0 ? "pt-20" : ""} ${
              (i === 0 || i === 4) && "hidden md:block"
            }`}
          >
            {Array.from({ length: numRows }).map((_, i) => (
              <img
                key={i}
                src={BGPattern}
                alt="BGPattern"
                className="w-[11px]"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;
