import { AsciiArt } from "./AsciiArt";

interface SectionIntroProps {
  kicker: string;
  ascii: string;
  srTitle: string;
  subtitle?: string;
  /** Extra classes on the ASCII block (e.g. music-ascii-tight) */
  asciiClassName?: string;
  /** When set, forwarded to the sr-only heading (e.g. aria-labelledby target) */
  headingId?: string;
  /** Override default subtitle paragraph classes */
  subtitleClassName?: string;
}

export function SectionIntro({
  kicker,
  ascii,
  srTitle,
  subtitle,
  asciiClassName,
  headingId,
  subtitleClassName,
}: SectionIntroProps) {
  const defaultSubtitle =
    "mx-auto mt-6 max-w-2xl text-center text-[var(--text-secondary)]";

  return (
    <div className="mb-14">
      <p className="text-center font-mono text-xs uppercase tracking-[0.4em] text-[var(--accent)]">{kicker}</p>
      <AsciiArt className={asciiClassName}>{ascii}</AsciiArt>
      <h2 className="sr-only" id={headingId}>
        {srTitle}
      </h2>
      {subtitle ? <p className={subtitleClassName ?? defaultSubtitle}>{subtitle}</p> : null}
    </div>
  );
}
