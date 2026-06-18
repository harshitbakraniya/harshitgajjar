'use client'

import { motion } from "framer-motion";
import Arrow from "@/svg/arrow";
import { useMediaQuery } from 'react-responsive'

function Title({ text1, text2 }) {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className="relative flex w-full overflow-hidden whitespace-nowrap bg-background py-12 sm:py-16 lg:py-24">
      <motion.div
        className="flex gap-8 sm:gap-12 lg:gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        <span className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-8xl">{text1}</span>
        <Arrow width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />
        <span className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-8xl">{text2}</span>
        <Arrow width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />
        <span className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-8xl">{text2}</span>
        <Arrow width={isMobile ? 50 : 100} height={isMobile ? 50 : 100} />
      </motion.div>
    </div>
  );
}

export default Title;
