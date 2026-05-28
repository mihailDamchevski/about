/** Section titles — raw figlet `small` output (exact bytes, no broken escapes). */
import musicAsciiRaw from "./ascii/music.txt?raw";
import projectsAsciiRaw from "./ascii/projects.txt?raw";
import experienceAsciiRaw from "./ascii/experience.txt?raw";

export const projectsAscii = projectsAsciiRaw.trimEnd();
export const musicAscii = musicAsciiRaw.trimEnd();
export const experienceAscii = experienceAsciiRaw.trimEnd();
