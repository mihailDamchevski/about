export interface Experience {
  period: string;
  title: string;
  company: string;
  bullets: readonly string[];
  tech: string;
}

export const experiences: readonly Experience[] = [
  {
    period: "Feb 2023 – Dec 2025",
    title: "QA Automation Engineer",
    company: "CodeChem",
    bullets: [
      "Architected scalable automation frameworks (WinAppDriver, FlaUI, Playwright) covering UI, API, and backend validation layers.",
      "Designed CI-integrated regression pipelines, reducing manual regression cycles from days to hours.",
      "Engineered virtual hardware simulation environments to improve test repeatability and eliminate dependency on physical devices.",
      "Reduced test flakiness through environment standardization and framework refactoring.",
      "Implemented SQL-driven backend validation for data integrity verification across complex workflows.",
      "Established structured defect-prevention collaboration with development teams, increasing early-stage defect detection.",
      "Standardized automation practices and documentation across the QA team.",
    ],
    tech: "WinAppDriver · FlaUI · Playwright · WebDriverIO · SQL · Postman · Jenkins/TeamCity",
  },
  {
    period: "Aug 2021 – Dec 2022",
    title: "QA Automation Engineer",
    company: "Magmabyte",
    bullets: [
      "Maintained and refactored Protractor/Jasmine and Playwright frameworks to improve CI execution stability.",
      "Reduced CI pipeline instability by diagnosing and resolving flaky test patterns.",
      "Implemented API validation workflows using Postman for backend verification.",
      "Contributed to performance testing initiatives using JMeter, analyzing bottlenecks, and reporting actionable findings.",
      "Expanded negative and edge-case test coverage to improve system fault tolerance.",
      "Integrated automated reporting via Allure within TeamCity pipelines.",
    ],
    tech: "Selenium · Protractor · Playwright · TeamCity · Azure · JMeter · Git",
  },
] as const;

export const education = {
  degree: "Bachelor of Engineering in Computer Science (In Progress)",
  school: "Ss. Cyril and Methodius University – FINKI",
} as const;
