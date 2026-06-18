"use client";

import { motion, useTransform } from "motion/react";
import Image from "next/image";

function Card({ index, total, progress, targetScale, ...card }) {
  const startInterval = index / total;
  const endInterval = (index + 1) / total;

  const scale = useTransform(
    progress,
    [startInterval, endInterval],
    [1, targetScale],
  );

  return (
    <div
      className={`sticky top-0 flex xl:h-screen w-full items-center justify-center ${card.bg}`}
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        className="flex xl:h-screen h-[60vh] w-full items-center justify-center px-6 sm:px-10 mt-20 xl:mt-0"
        style={{
          transform: scale,
        }}
      >
        <Image
          src={card.image}
          alt={card.name}
          width={500}
          height={500}
          className="w-full rounded-2xl border-4 border-white/40 object-cover sm:max-w-[780px] sm:rounded-3xl sm:border-8 xl:max-w-[500px]"
        />
        <div className="absolute left-6 top-10 w-full sm:left-10 sm:top-14 lg:left-14">
          <h3 className="text-3xl font-semibold leading-none text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {card.name}
          </h3>
          <p className="mt-2 inline-block rounded-full border border-white px-3 py-1 text-xs font-bold text-white sm:px-4 sm:text-sm">
            {card.category}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;
