import { motion, useReducedMotion } from "framer-motion";
import { experienceAscii } from "../../constants/sectionascii";
import { experiences, education } from "../../data/experience";
import { staggerContainer, staggerItem } from "../../lib/motion";
import { Reveal } from "../motion/Reveal";
import { SectionIntro } from "../ui/SectionIntro";

export const Experience = () => {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative border-b border-[var(--border-subtle)] py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionIntro
            kicker="// career.log"
            ascii={experienceAscii}
            srTitle="Experience"
            subtitle="Building automation infrastructure across web, desktop, and hardware-integrated systems."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-[1.125rem] top-0 bottom-0 w-px bg-[var(--border-subtle)] max-md:hidden" aria-hidden />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={`${exp.company}-${exp.period}`} delay={i * 0.07}>
                <div className="relative md:pl-12">
                  <div className="absolute left-[0.625rem] top-2 hidden h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-deep)] md:block" aria-hidden />

                  <motion.div
                    className="terminal-panel terminal-panel--lift p-6 md:p-8"
                    variants={staggerContainer}
                    initial={reduce ? false : "hidden"}
                    whileInView={reduce ? undefined : "visible"}
                    viewport={{ once: true, margin: "-40px", amount: 0.2 }}
                  >
                    <div className="border-b border-[var(--border-subtle)] pb-4">
                      <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                        {exp.period}
                      </p>
                      <h3 className="mt-2 font-mono text-lg font-semibold text-[var(--text-primary)]">
                        {exp.title}
                      </h3>
                      <p className="mt-0.5 font-mono text-sm text-[var(--text-secondary)]">
                        {exp.company}
                      </p>
                    </div>

                    <motion.ul className="mt-4 space-y-3" variants={staggerContainer}>
                      {exp.bullets.map((bullet) => (
                        <motion.li
                          key={bullet.slice(0, 20)}
                          variants={staggerItem}
                          className="flex gap-3"
                        >
                          <span className="mt-1 font-mono text-[var(--accent)]" aria-hidden>▸</span>
                          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{bullet}</p>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="mt-5 border-t border-[var(--border-subtle)] pt-4">
                      <p className="font-mono text-xs text-[var(--text-muted)]">
                        <span className="text-[var(--accent)]">$</span> {exp.tech}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.14}>
              <div className="relative md:pl-12">
                <div className="absolute left-[0.625rem] top-2 hidden h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg-deep)] md:block" aria-hidden />

                <div className="terminal-panel terminal-panel--lift p-6 md:p-8">
                  <p className="font-mono text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                    In Progress
                  </p>
                  <h3 className="mt-2 font-mono text-lg font-semibold text-[var(--text-primary)]">
                    {education.degree}
                  </h3>
                  <p className="mt-0.5 font-mono text-sm text-[var(--text-secondary)]">
                    {education.school}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
