import type { Transition, Variants } from "framer-motion";

/** Snappy spring — quick settle, no mush */
export const springSnappy: Transition = {
  type: "spring",
  stiffness: 440,
  damping: 34,
  mass: 0.85,
};

export const springSoft: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 38,
};

export const easeOutExpo: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export const viewport = {
  once: true,
  margin: "-72px 0px",
  amount: 0.2,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springSnappy,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: springSnappy },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: springSnappy },
};

export const heroStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: springSnappy },
};
