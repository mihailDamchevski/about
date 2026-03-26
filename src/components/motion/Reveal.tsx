import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, springSnappy, viewport } from "../../lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Scroll-triggered fade-up — runs once, respects reduced motion */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={viewport}
      variants={fadeUp}
      transition={{ ...springSnappy, delay }}
    >
      {children}
    </motion.div>
  );
}
