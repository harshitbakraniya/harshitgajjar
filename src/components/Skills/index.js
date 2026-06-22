"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

const items = [
  {
    title: "Frontend Development",
    content:
      "I'm passionate about creating beautiful and functional websites. I'm proficient in technologies like React.js, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    content:
      "I'm passionate about creating beautiful and functional websites. I'm proficient in technologies like Node.js, Express.js, MongoDB, and PostgreSQL.",
  },
];

function PlusMinusIcon({ isOpen }) {
  return (
    <motion.div
      className="relative ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#111] sm:h-9 sm:w-9"
    >
      <motion.span className="absolute h-[1.5px] w-3.5 rounded-sm bg-[#111] sm:w-3.5" />
      <motion.span
        animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute h-3.5 w-[1.5px] rounded-sm bg-[#111]"
      />
    </motion.div>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b-[1.5px] border-[#111]">
      <motion.button
        onClick={onToggle}
        whileTap={{ scale: 0.99 }}
        initial="rest"
        animate="rest"
        whileHover="hover"
        className={`accordion-item-btn group relative flex ${isOpen ? "flex-wrap" : "flex-row"} w-full cursor-pointer items-center justify-between gap-4 overflow-hidden border-none bg-none px-5 py-6 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-10 ${isOpen ? "bg-white" : "bg-transparent"}`}
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

        <span className="relative z-10 text-xl font-medium leading-[1.1] tracking-[-0.02em] text-[#111] sm:text-[clamp(22px,3vw,30px)]">
          {item.title}
        </span>

        <div className="relative z-10 flex w-full items-start justify-between gap-4 sm:w-auto sm:justify-end sm:gap-10">
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.p
                key="content"
                initial={{ height: 0, opacity: 0, y: 6 }}
                animate={{ height: "auto", opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                className="m-0 max-w-full text-base font-medium leading-[1.65] sm:max-w-[420px] sm:text-lg lg:text-xl"
              >
                {item.content}
              </motion.p>
            )}
          </AnimatePresence>
          <PlusMinusIcon isOpen={isOpen} />
        </div>
      </motion.button>
    </div>
  );
}

function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#ffabdf] px-6 py-12 sm:px-10 sm:py-16 lg:p-20">
      <div className="mx-auto flex h-full max-w-6xl flex-col gap-8 sm:gap-10">
        <Reveal>
          <h2 className="text-4xl font-medium leading-[1.2] sm:text-5xl md:text-6xl lg:text-7xl">
            I'm good at..
          </h2>
        </Reveal>
        <div className="flex w-full flex-1 flex-col justify-center overflow-hidden rounded-none bg-white">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <motion.div
                animate={{
                  backgroundColor: openIndex === i ? "#fff" : "#ffabdf",
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <AccordionItem
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
