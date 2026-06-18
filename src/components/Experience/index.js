"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Arrow from "@/svg/arrow";

const items = [
  {
    date: "July 2025 - April 2026",
    role: "Frontend Developer (Receiptflow)",
    redirect: "https://receiptflow.co",
  },
  {
    date: "April 2024 - June 2025",
    role: "MERN Developer (Adhyayan Yatra)",
    redirect: "https://adhyayanyatra.com",
  },
  {
    date: "January 2024 - April 2025",
    role: "Frontend Developer (Saleshandy)",
    redirect: "https://saleshandy.com",
  },
  {
    date: "November 2022 - December 2023",
    role: "Associate Software Engineer (Apexon)",
    redirect: "https://apexon.com",
  },
];

function AccordionItem({ item }) {
  return (
    <div className="border-b-[1.5px] border-[#111]">
      <motion.button
        onClick={() => window.open(item.redirect, "_blank")}
        whileTap={{ scale: 0.99 }}
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="accordion-item-btn group relative flex w-full cursor-pointer flex-col items-start gap-3 overflow-hidden border-none bg-none px-5 py-6 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-10"
      >
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 z-0 h-full w-full rounded-none bg-white"
          variants={{
            rest: { scaleY: 0 },
            hover: { scaleY: 1 },
          }}
          transition={{ duration: 0.45, ease: [0.4, 0.7, 0.4, 1] }}
          style={{
            transformOrigin: "bottom",
          }}
        />

        <span className="relative z-10 text-base font-medium text-[#111] sm:text-lg lg:text-xl">
          {item.date}
        </span>

        <div className="relative z-10 flex w-full items-start sm:w-auto">
          <p className="flex items-center gap-2 text-left sm:text-right xl:text-left text-lg font-semibold leading-[1.4] sm:text-xl lg:text-2xl lg:leading-[1.65]">
            {item.role}
            <span className="-rotate-90 shrink-0">
              <Arrow color="#111" width={24} height={24} />
            </span>
          </p>
        </div>
      </motion.button>
    </div>
  );
}

function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-[#c2f1a5] px-6 py-12 sm:px-10 sm:py-16 lg:p-20">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-8 sm:gap-10">
        <h2 className="text-4xl font-medium leading-[1.2] sm:text-5xl md:text-6xl lg:text-7xl">
          Work experience..
        </h2>
        <div className="flex w-full flex-1 flex-col justify-center overflow-hidden rounded-none">
          {items.map((item, i) => (
            <motion.div
              key={item.role}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <AccordionItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
