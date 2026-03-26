import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { ProjectItem } from "../../data/projects";
import { springSnappy } from "../../lib/motion";
import { TechTag } from "./TechTag";

const FRAME_WIDTH = 52;

function AsciiFrame({ session, children }: { session: string; children: ReactNode }) {
  const inner = `── ${session} `;
  const dashCount = Math.max(0, FRAME_WIDTH - 2 - inner.length);
  const top = `┌${inner}${"─".repeat(dashCount)}┐`;
  const bottom = `└${"─".repeat(FRAME_WIDTH - 2)}┘`;

  return (
    <div className="ascii-project-frame font-mono text-[0.62rem] leading-none text-[var(--accent)]/90 sm:text-[0.68rem] md:text-[0.75rem]">
      <pre
        className="mb-0 overflow-visible whitespace-pre text-[var(--accent)]/75 [text-shadow:0_0_10px_rgb(var(--accent-rgb)/0.2)]"
        aria-hidden
      >
        {top}
      </pre>
      <div className="border-x border-[var(--border-strong)]/80 bg-[var(--bg-card)] px-4 py-5 sm:px-5">{children}</div>
      <pre
        className="mt-0 overflow-visible whitespace-pre text-[var(--accent)]/75 [text-shadow:0_0_10px_rgb(var(--accent-rgb)/0.2)]"
        aria-hidden
      >
        {bottom}
      </pre>
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="will-change-transform transition-[filter] hover:[filter:drop-shadow(0_8px_24px_rgb(var(--accent-rgb)/0.12))]"
      whileHover={reduce ? undefined : { y: -10 }}
      whileTap={reduce ? undefined : { scale: 0.99 }}
      transition={springSnappy}
    >
      <AsciiFrame session={project.session}>
        <h3 className="font-mono text-base font-semibold leading-snug text-[var(--text-primary)] md:text-lg">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{project.body}</p>
        <div className="tech-stack mt-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">Stack</p>
          <div className="tech-tags">
            {project.tags.map((name) => (
              <TechTag key={name} name={name} />
            ))}
          </div>
        </div>
      </AsciiFrame>
    </motion.article>
  );
}
