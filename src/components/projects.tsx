const techDocsMap: { [key: string]: string } = {
  "TestRail": "https://www.testrail.com/",
  "JavaScript/TypeScript": "https://www.typescriptlang.org/docs/",
  "Playwright": "https://playwright.dev/",
  "CircleCI": "https://circleci.com/docs/",
  "K6": "https://k6.io/docs/",
  "Postman": "https://learning.postman.com/docs/",
  "Protractor": "https://www.protractortest.org/#/",
  "TeamCity": "https://www.jetbrains.com/help/teamcity/",
  "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
  "QACoverage": "https://smartbear.com/product/testcomplete/",
  "Powershell": "https://learn.microsoft.com/en-us/powershell/",
  "TestComplete": "https://smartbear.com/product/testcomplete/",
  "WinAppDriver": "https://github.com/microsoft/WinAppDriver",
  "WDIO": "https://webdriver.io/docs/gettingstarted/",
  "Github Actions": "https://docs.github.com/en/actions",
  "VirtualBox": "https://www.virtualbox.org/manual/",
  "QEMU": "https://www.qemu.org/docs/master/",
  "AIW": "https://accessibilityinsights.io/docs/en/web/overview/"
};

const TechTag = ({ name }: { name: string }) => {
  const url = techDocsMap[name];
  const handleClick = (e: React.MouseEvent) => {
    if (url) {
      e.preventDefault();
      window.open(url, '_blank');
    }
  };

  return (
    <button
      className="tech-tag"
      onClick={handleClick}
      title={url ? `Open ${name} documentation` : name}
    >
      {name}
    </button>
  );
};

export const Projects = () => (
  <section id="projects" className="min-h-screen py-20">
    <div className="container mx-auto px-6 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-shadow" data-aos="fade-down">
        Projects I've worked on
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-red-900 to-red-950 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl flex flex-col border border-red-800 border-opacity-30 hover:border-opacity-50 transition-all hover:shadow-red-600/20" data-aos="flip-left">
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-3">Influencer marketing platform for E-Commerce brands</h3>
            <p className="mb-6 flex-1">
              Developed automated end-to-end tests using Playwright, covering campaign creation, influencer onboarding, and performance analytics.
              Focused on verifying API integrations, improving test reliability, and enabling efficient parallel execution within CI pipelines.
            </p>
            <div className="tech-stack">
              <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
              <div className="tech-tags">
                <TechTag name="TestRail" />
                <TechTag name="JavaScript/TypeScript" />
                <TechTag name="Playwright" />
                <TechTag name="CircleCI" />
                <TechTag name="K6" />
                <TechTag name="Postman" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-900 to-red-950 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl flex flex-col border border-red-800 border-opacity-30 hover:border-opacity-50 transition-all hover:shadow-red-600/20" data-aos="flip-left" data-aos-delay="200">
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-3">A practice management/EMR software</h3>
            <p className="mb-6 flex-1">
              Implemented comprehensive automation using Playwright to validate workflows like patient registration, appointment scheduling, and
              medical records handling. Designed modular test structures to enhance maintainability and ensure stability across frequent releases.
            </p>
            <div className="tech-stack">
              <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
              <div className="tech-tags">
                <TechTag name="TestRail" />
                <TechTag name="Protractor" />
                <TechTag name="Playwright" />
                <TechTag name="JavaScript/TypeScript" />
                <TechTag name="TeamCity" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-900 to-red-950 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl flex flex-col border border-red-800 border-opacity-30 hover:border-opacity-50 transition-all hover:shadow-red-600/20" data-aos="flip-left" data-aos-delay="400">
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-3">Color matching software</h3>
            <p className="mb-6 flex-1">
              Built a custom JavaScript-based desktop automation framework to validate UI interactions, color calibration logic, and rendering
              accuracy. Designed reusable components, integrated reporting, and optimized execution for rapid regression testing of new features.
            </p>
            <div className="tech-stack">
              <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
              <div className="tech-tags">
                <TechTag name="QACoverage" />
                <TechTag name="Powershell" />
                <TechTag name="JavaScript" />
                <TechTag name="TestComplete" />
                <TechTag name="WinAppDriver" />
                <TechTag name="WDIO" />
                <TechTag name="Github Actions" />
                <TechTag name="VirtualBox" />
                <TechTag name="QEMU" />
                <TechTag name="AIW" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
