import { motion, useReducedMotion } from "framer-motion";
import { TECH_DOCS_URLS } from "../../constants/techDocs";
import { aboutmeAscii } from "../../constants/mihailascii";
import { pillars, techStack } from "../../data/about";
import { springSnappy, staggerContainer, staggerItem } from "../../lib/motion";
import { Reveal } from "../motion/Reveal";
import { SectionIntro } from "../ui/SectionIntro";

const techChipClassName =
  "inline-block rounded-md border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-3 py-1.5 font-mono text-xs text-[var(--accent)] shadow-sm outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]";

export const About = () => {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative border-b border-[var(--border-subtle)] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--accent-rgb)/0.04)_0%,transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionIntro
            kicker="// profile.dat"
            ascii={aboutmeAscii}
            srTitle="About me"
            subtitle="Software engineer and automation tester—frameworks, pipelines, and quality culture."
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal delay={0.04}>
            <div className="terminal-panel terminal-panel--lift space-y-4 p-6 md:p-8">
              <div className="border-b border-[var(--border-subtle)] pb-4 font-mono text-xs leading-relaxed">
                <span className="text-[var(--accent)]">mihail@portfolio</span>
                <span className="text-[var(--text-muted)]">:~$ </span>
                <span className="text-[var(--text-secondary)]">tail -f </span>
                <span className="text-[var(--text-primary)]">capabilities.log</span>
              </div>
              <motion.ul
                className="space-y-5"
                variants={staggerContainer}
                initial={reduce ? false : "hidden"}
                whileInView={reduce ? undefined : "visible"}
                viewport={{ once: true, margin: "-40px", amount: 0.2 }}
              >
                {pillars.map(({ title, body }) => (
                  <motion.li key={title} variants={staggerItem} className="flex gap-4">
                    <span className="mt-0.5 font-mono text-[var(--accent)]" aria-hidden>
                      ▸
                    </span>
                    <div>
                      <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-[var(--text-primary)]">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">{body}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div className="terminal-panel terminal-panel--lift p-6 md:p-8">
                <h3 className="font-mono text-lg font-semibold text-[var(--text-primary)]">Why hire me</h3>
                <p className="mt-4 text-[var(--text-secondary)]">
                  I care about reliable releases: automation that teams trust, pipelines that fail fast, and tests that explain
                  what broke. I collaborate across engineering and product to keep quality visible—not an afterthought.
                </p>
                <p className="mt-4 text-[var(--text-secondary)]">
                  Outside of QA, I&apos;m an audio engineer and producer—that ear for detail carries into how I review builds and
                  edge cases.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">Tech stack</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techStack.map((tech, i) => {
                    const href = TECH_DOCS_URLS[tech];
                    const motionProps = {
                      initial: reduce ? false : { opacity: 0, scale: 0.92 },
                      whileInView: reduce ? undefined : { opacity: 1, scale: 1 },
                      viewport: { once: true },
                      transition: { ...springSnappy, delay: i * 0.035 },
                      whileHover: reduce ? undefined : { scale: 1.04, borderColor: "var(--tech-chip-hover-border)" },
                      className: techChipClassName,
                    };
                    return href ? (
                      <motion.a
                        key={tech}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Open ${tech} documentation (new tab)`}
                        {...motionProps}
                      >
                        {tech}
                      </motion.a>
                    ) : (
                      <motion.span key={tech} {...motionProps}>
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
