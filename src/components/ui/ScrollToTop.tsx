import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
import { springSnappy } from "../../lib/motion";

const SCROLL_THRESHOLD = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <motion.button
      type="button"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--accent)] shadow-lg backdrop-blur-md transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      initial={false}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={springSnappy}
    >
      <FaArrowUp size={16} />
    </motion.button>
  );
}
