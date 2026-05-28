import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
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
      <div className="flex items-center gap-4">
        <a
          href="mailto:mihaildamcevski@gmail.com"
          className="font-mono text-xs text-[var(--accent)] underline-offset-2 transition-colors hover:text-[var(--text-primary)] hover:underline"
        >
          mihaildamcevski@gmail.com
        </a>
        <a
          href="/MihailDamchevski_Resume.html"
          download
          className="flex items-center gap-1.5 font-mono text-xs text-[var(--accent)] underline-offset-2 transition-colors hover:text-[var(--text-primary)] hover:underline"
          aria-label="Download resume"
        >
          <FaDownload size={12} />
          Resume
        </a>
      </div>
      <SocialLinks variant="footer" />
    </div>
  </motion.footer>
);
