"use client";

import { motion } from "framer-motion";
import Arrow from "@/svg/arrow";

function Title({ text1, text2 }) {
  const arrowClass = "h-[50px] w-[50px] md:h-[100px] md:w-[100px]";

  return (
    <div className="relative flex w-full overflow-hidden overflow-x-hidden whitespace-nowrap bg-background py-12 sm:py-16 lg:py-24">
      <motion.div
        className="flex items-center gap-8 sm:gap-12 lg:gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        <span className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-8xl">
          {text1}
        </span>
        <Arrow className={arrowClass} />
        <span className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-8xl">
          {text2}
        </span>
        <Arrow className={arrowClass} />
        <span className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-8xl">
          {text2}
        </span>
        <Arrow className={arrowClass} />
      </motion.div>
    </div>
  );
}

export default Title;
