"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Home page header is rendered inside Hero
  if (isHome) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-0 right-0 top-6 z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:top-10 sm:px-10 lg:px-16"
    >
      <Link
        href="/#home"
        className="cursor-pointer text-lg font-bold leading-none text-white"
      >
        Harshit <br />- Bakraniya
      </Link>
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
    </motion.div>
  );
}

export default Header;
