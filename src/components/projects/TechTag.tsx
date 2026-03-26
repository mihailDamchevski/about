import type { MouseEvent } from "react";
import { TECH_DOCS_URLS } from "../../constants/techDocs";

interface TechTagProps {
  name: string;
}

export function TechTag({ name }: TechTagProps) {
  const url = TECH_DOCS_URLS[name];

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (url) {
      e.preventDefault();
      window.open(url, "_blank");
    }
  };

  return (
    <button
      type="button"
      className="tech-tag"
      onClick={handleClick}
      title={url ? `Open ${name} documentation` : name}
    >
      {name}
    </button>
  );
}
