"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

const offsets = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { x: -48, y: 0 },
  right: { x: 48, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;
  const offset = offsets[direction] ?? offsets.up;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </Component>
  );
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
  delayChildren = 0,
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", direction = "up" }) {
  const offset = offsets[direction] ?? offsets.up;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.7, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
