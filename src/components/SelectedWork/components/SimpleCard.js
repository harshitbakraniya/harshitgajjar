"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function SimpleCard({ ...card }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex w-full flex-col items-center justify-center px-6 py-16 sm:px-10 sm:py-20 ${card.bg}`}
    >
      <div className="mt-auto flex w-full max-w-md flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={card.image}
            alt={card.name}
            width={1000}
            height={700}
            className="mt-20 w-full rounded-2xl border-4 border-white/40 object-cover"
          />
        </motion.div>
        <div className="absolute left-5 top-10 w-full text-left">
          <h3 className="text-3xl font-semibold leading-none text-white sm:text-4xl">
            {card.name}
          </h3>
          <p className="mt-2 inline-block rounded-full border border-white px-3 py-1 text-xs font-bold text-white sm:px-4 sm:text-sm">
            {card.category}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
