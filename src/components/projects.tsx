export const Projects = () => (
  <section id="projects" className="min-h-screen py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-shadow" data-aos="fade-down">
        Projects I've worked on
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-green-700 bg-opacity-20 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg" data-aos="flip-left">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Influencer marketing platform for E-Commerce brands</h3>
            <p className="mb-4">
              Developed automated end-to-end tests using Playwright, covering campaign creation, influencer onboarding, and performance analytics.
              Focused on verifying API integrations, improving test reliability, and enabling efficient parallel execution within CI pipelines.
            </p>
          </div>
        </div>
        <div className="bg-green-700 bg-opacity-20 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg" data-aos="flip-left" data-aos-delay="200">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">A practice management/EMR software</h3>
            <p className="mb-4">
              Implemented comprehensive automation using Playwright to validate workflows like patient registration, appointment scheduling, and
              medical records handling. Designed modular test structures to enhance maintainability and ensure stability across frequent releases.
            </p>
          </div>
        </div>
        <div className="bg-green-700 bg-opacity-20 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg" data-aos="flip-left" data-aos-delay="400">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Color matching software</h3>
            <p className="mb-4">
              Built a custom JavaScript-based desktop automation framework to validate UI interactions, color calibration logic, and rendering
              accuracy. Designed reusable components, integrated reporting, and optimized execution for rapid regression testing of new features.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
