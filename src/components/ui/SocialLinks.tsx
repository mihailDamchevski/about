import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { site } from "../../config/site";

const iconClass = "text-xl";

const linkBase =
  "text-[var(--accent)] transition hover:text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

interface SocialLinksProps {
  /** Header uses tighter gap next to mobile menu */
  variant?: "header" | "footer";
}

export function SocialLinks({ variant = "footer" }: SocialLinksProps) {
  const gap = variant === "header" ? "gap-4" : "gap-6";

  return (
    <div className={`flex items-center ${gap}`}>
      <a
        href={site.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkBase}
        aria-label="GitHub profile"
      >
        <FaSquareGithub className={iconClass} />
      </a>
      <a
        href={site.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkBase}
        aria-label="LinkedIn profile"
      >
        <FaLinkedin className={iconClass} />
      </a>
    </div>
  );
}
