import { projectsAscii } from "../../constants/sectionascii";
import { projects } from "../../data/projects";
import { ProjectCard } from "../projects/ProjectCard";
import { Reveal } from "../motion/Reveal";
import { SectionIntro } from "../ui/SectionIntro";

export const Projects = () => (
  <section id="projects" className="border-b border-[var(--border-subtle)] py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6">
      <Reveal>
        <SectionIntro
          kicker="// case_studies"
          ascii={projectsAscii}
          srTitle="Projects"
          subtitle="Real product contexts—automation, reliability, and delivery. Tags link to docs when useful."
        />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.07}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
