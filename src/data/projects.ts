export const projects = [
  {
    session: "campaigns_e2e.log",
    title: "Influencer marketing platform (e‑commerce)",
    body:
      "End-to-end Playwright coverage: campaigns, influencer onboarding, analytics. API checks, parallel CI runs, and steadier releases.",
    tags: ["TestRail", "JavaScript/TypeScript", "Playwright", "CircleCI", "K6", "Postman"],
  },
  {
    session: "emr_workflows.log",
    title: "Practice management / EMR software",
    body:
      "Playwright automation for registration, scheduling, and records. Modular structure for frequent releases and easier maintenance.",
    tags: ["TestRail", "Protractor", "Playwright", "JavaScript/TypeScript", "TeamCity"],
  },
  {
    session: "color_desktop.log",
    title: "Color-matching desktop product",
    body:
      "Custom JS desktop automation: UI flows, calibration logic, rendering. Reporting, reuse, and fast regression for new builds.",
    tags: [
      "QACoverage",
      "Powershell",
      "JavaScript",
      "TestComplete",
      "WinAppDriver",
      "WDIO",
      "Github Actions",
      "VirtualBox",
      "QEMU",
      "AIW",
    ],
  },
] as const;

export type ProjectItem = (typeof projects)[number];
