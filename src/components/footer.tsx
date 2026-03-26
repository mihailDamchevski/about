import { motion } from "framer-motion";
import { site } from "../config/site";
import { fadeIn, viewport } from "../lib/motion";
import { SocialLinks } from "./ui/SocialLinks";

export const Footer = () => (
  <motion.footer
    className="border-t border-[var(--border-subtle)] bg-[var(--bg-deep)] py-10"
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
  >
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
      <div className="text-center md:text-left">
        <p className="font-mono text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} {site.displayName}
        </p>
        <p className="mt-1 font-mono text-xs text-[var(--text-muted)]">QA engineer · open to opportunities</p>
      </div>
      <SocialLinks variant="footer" />
      <p className="font-mono text-xs text-[var(--text-muted)]">React · TypeScript · Tailwind</p>
    </div>
  </motion.footer>
);
