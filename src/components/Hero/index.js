"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Arrow from "@/svg/arrow";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 72 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

function Hero() {
  return (
    <section
      id="home"
      className="bg-background relative flex min-h-screen w-full flex-col items-start justify-center px-6 pb-20 pt-28 sm:px-10 sm:pt-36 lg:px-16 lg:pt-40"
    >
      {/* Soft glow — radial gradients instead of blur (blur causes x-overflow) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-0 top-16 h-80 w-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,171,223,0.22) 0%, transparent 68%)",
          }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-24 right-0 h-96 w-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(194,241,165,0.18) 0%, transparent 68%)",
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Desktop header links */}
      <div className="absolute left-0 right-0 top-6 z-50 mx-auto hidden w-full max-w-7xl items-center justify-between px-6 sm:top-10 sm:px-10 lg:flex lg:px-16">
        <div className="text-lg font-bold leading-none text-white">
          Harshit <br />- Bakraniya
        </div>
        <div className="flex items-center gap-4">
          <span className="relative bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-[position:bottom_left] bg-no-repeat text-lg text-white no-underline transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_2px]">
            +91 7698366737
          </span>
          <Link
            href="https://linkedin.com/in/harshit-bakraniya-034254299"
            className="relative bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-[position:bottom_left] bg-no-repeat text-lg text-white no-underline transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_2px]"
          >
            LinkedIn
          </Link>
        </div>
      </div>

      <motion.div
        className="relative z-10 flex w-full min-w-0 flex-wrap items-start gap-x-2 gap-y-1 text-white sm:gap-x-4 sm:gap-y-2 lg:items-end lg:justify-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          className="w-full text-2xl font-medium sm:text-3xl md:w-auto md:text-4xl"
        >
          🤟 Hello, <br />
          I'm Harshit
        </motion.div>

        <div className="min-w-0 overflow-hidden pb-1">
          <motion.div
            variants={slideUp}
            className="text-[clamp(3rem,14vw,14rem)] font-semibold leading-[0.8]"
          >
            Frontend
          </motion.div>
        </div>

        <div className="min-w-0 overflow-hidden pb-1 lg:-ml-6 xl:-ml-10 2xl:-ml-16">
          <motion.div
            variants={slideUp}
            className="text-[clamp(3rem,14vw,14rem)] font-semibold leading-[0.8]"
          >
            Developer
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto mt-12 w-full min-w-0 max-w-6xl text-left sm:mt-16 lg:mt-32"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease }}
      >
        <p className="text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-6xl lg:leading-[1.4]">
          I'm passionate about blending innovation with aesthetics to create
          designs that tell a story and leave a lasting impact.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease }}
        >
          <Link
            href="#about"
            className="group mt-10 inline-flex w-[140px] items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-[position:bottom_left] bg-no-repeat text-2xl font-medium text-white no-underline transition-[background-size] duration-500 ease-in-out hover:bg-[length:100%_2px] sm:mt-16 lg:mt-20"
          >
            About Me
            <motion.span
              className="-rotate-90"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Arrow height={20} width={20} />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
