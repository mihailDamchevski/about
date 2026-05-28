import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../config/site";
import { heroItem, heroStagger, springSnappy } from "../../lib/motion";
import { DigitalRain } from "../ui/DigitalRain";

const btnPrimary =
  "inline-flex items-center justify-center rounded-lg border border-[var(--accent)] bg-[var(--accent)]/10 px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--accent)] shadow-[0_0_24px_rgb(var(--accent-rgb)/0.12)] transition-colors hover:bg-[var(--accent)]/22 hover:shadow-[0_0_36px_rgb(var(--accent-rgb)/0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:scale-[0.98]";
const btnGhost =
  "inline-flex items-center justify-center rounded-lg border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]/55 hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] active:scale-[0.98]";
const linkMuted =
  "inline-flex items-center justify-center px-2 py-3 font-mono text-sm text-[var(--text-muted)] underline-offset-4 transition-colors hover:text-[var(--accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[var(--border-subtle)]"
      aria-labelledby="hero-heading"
    >
      <div className="hero-aurora pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-aurora__blob hero-aurora__blob--a" />
        <div className="hero-aurora__blob hero-aurora__blob--b" />
        <div className="hero-aurora__blob hero-aurora__blob--c" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(var(--accent-rgb)/0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--bg-deep)_100%)]" />
      <DigitalRain />
      <motion.div
          className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:py-32"
        variants={heroStagger}
        initial={reduce ? false : "hidden"}
        animate="visible"
      >
        <motion.p
          variants={heroItem}
          className="font-mono text-sm tracking-[0.35em] text-[var(--accent)]/90 md:text-base"
        >
          <span className="text-[var(--text-muted)]">[</span> QA ENGINEER · TEST AUTOMATION{" "}
          <span className="text-[var(--text-muted)]">]</span>
        </motion.p>
        <motion.h1
          variants={heroItem}
          id="hero-heading"
          className="mt-6 max-w-3xl bg-gradient-to-br from-[var(--text-primary)] via-[var(--text-primary)] to-[var(--text-secondary)] bg-clip-text font-mono text-3xl font-semibold leading-tight tracking-tight text-transparent md:text-5xl md:leading-[1.08]"
        >
          Ship with confidence. I design automation that catches what manual testing misses.
        </motion.h1>
        <motion.p variants={heroItem} className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)] md:text-xl">
          Playwright, CI/CD pipelines, and pragmatic quality practices—built for fast-moving teams who still care about
          stability.
        </motion.p>

        <motion.div variants={heroItem} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <motion.a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={btnPrimary}
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={springSnappy}
          >
            Open LinkedIn
          </motion.a>
          <motion.a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={btnGhost}
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={springSnappy}
          >
            View GitHub
          </motion.a>
          <motion.a
            href="/MihailDamchevski_Resume.html"
            download
            className={btnGhost}
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={springSnappy}
          >
            Download Resume
          </motion.a>
          <a href="#about" className={linkMuted}>
            Read profile →
          </a>
        </motion.div>

        <motion.dl
          variants={heroItem}
          className="mt-16 grid gap-6 border-t border-[var(--border-subtle)] pt-10 sm:grid-cols-3"
        >
          {[
            { t: "Experience", m: "5+ yrs", s: "Automation & quality" },
            { t: "Focus", m: "E2E · API", s: "Desktop & web" },
            { t: "Stack", m: "Playwright", s: "CI/CD · K6 · more" },
          ].map((row) => (
            <motion.div
              key={row.t}
              className="rounded-lg border border-transparent p-3 transition-colors hover:border-[var(--border-subtle)] hover:bg-[var(--bg-elevated)]/40"
              whileHover={reduce ? undefined : { y: -3 }}
              transition={springSnappy}
            >
              <dt className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">{row.t}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold text-[var(--text-primary)]">{row.m}</dd>
              <dd className="mt-1 text-sm text-[var(--text-secondary)]">{row.s}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
};
