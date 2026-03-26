interface AsciiArtProps {
  children: string;
  className?: string;
}

export function AsciiArt({ children, className = "" }: AsciiArtProps) {
  return (
    <pre className={`ascii-section-block ascii-blue ${className}`.trim()} aria-hidden>
      {children}
    </pre>
  );
}
