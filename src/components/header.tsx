import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../config/navigation";
import { site } from "../config/site";
import { mihailAscii, qasw } from "../constants/mihailascii";
import { springSnappy } from "../lib/motion";
import { SocialLinks } from "./ui/SocialLinks";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const reduce = useReducedMotion();

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.div
        className="border-b border-[var(--border-subtle)] bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-deep)] py-3"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <pre
            className="ascii-banner ascii-blue font-mono text-[clamp(0.28rem,1.65vw,0.48rem)] leading-none"
            aria-hidden="true"
          >
            {mihailAscii}
          </pre>
          <pre
            className="ascii-banner-secondary ascii-blue-dim mt-1 font-mono text-[clamp(0.22rem,1.2vw,0.36rem)] leading-none"
            aria-hidden="true"
          >
            {qasw}
          </pre>
        </div>
      </motion.div>

      <motion.header
        className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-deep)]/80 backdrop-blur-xl backdrop-saturate-150"
        initial={reduce ? false : { y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springSnappy}
      >
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6">
          <motion.a
            href="#home"
            className="header-brand font-mono text-base font-bold tracking-wide text-[var(--accent)] [text-shadow:0_0_18px_rgb(var(--accent-rgb)/0.45)] md:text-lg"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={springSnappy}
          >
            &gt; {site.displayName}
          </motion.a>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:gap-8"
            aria-label="Primary"
          >
            {NAV_ITEMS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`nav-cyber${activeId === href.slice(1) ? " nav-cyber--active" : ""}`}
              >
                $ {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-4">
            <SocialLinks variant="header" />

            <motion.button
              type="button"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-[var(--border-subtle)] font-mono text-[var(--accent)] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              whileTap={reduce ? undefined : { scale: 0.95 }}
            >
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="sr-only">Menu</span>
            </motion.button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`border-t border-[var(--border-subtle)] bg-[var(--bg-deep)] px-4 py-4 md:hidden ${open ? "block" : "hidden"}`}
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {NAV_ITEMS.map(({ href, label }) => (
              <a key={href} href={href} className="nav-cyber py-1" onClick={() => setOpen(false)}>
                $ {label}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>
    </>
  );
};
