export const About = () => (
  <section id="about" className="mx-auto flex items-center justify-center py-20 bg-gradient-to-br from-red-900 to-red-950">
    <div className="container mx-auto px-6">
      <h2 className="mt-5 text-4xl font-bold mb-12 text-center" data-aos="fade-down">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div data-aos="fade-right" className="bg-gradient-to-br from-red-900 to-red-950 rounded-lg p-8 border border-red-800 border-opacity-30">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-red-600 text-2xl">📋</span>
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-2">QA & Test Automation</h3>
                <p className="text-gray-300">5+ years creating robust automation frameworks with Playwright, TestRail, and custom JavaScript solutions. Specialized in designing scalable test architecture for complex applications.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-600 text-2xl">⚙️</span>
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-2">CI/CD & Infrastructure</h3>
                <p className="text-gray-300">Expert in CircleCI, TeamCity, and Github Actions. Experienced with containerization (VirtualBox, QEMU), Windows automation, and performance testing (K6).</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-600 text-2xl">🖥️</span>
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-2">Desktop App Testing & Development</h3>
                <p className="text-gray-300">Experienced with WinAppDriver, TestComplete, and custom automation for Windows desktop applications. Built and tested applications across multiple platforms using VirtualBox, QEMU, and real hardware environments.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-600 text-2xl">🌐</span>
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-2">Full-Stack Web Development</h3>
                <p className="text-gray-300">Proficient in JavaScript, TypeScript, React, and modern web technologies. Building scalable, maintainable solutions with clean architecture and best practices.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-red-600 text-2xl">🔒</span>
              <div>
                <h3 className="text-lg font-bold text-red-600 mb-2">Networking & Security</h3>
                <p className="text-gray-300">Knowledge of networking fundamentals, pentesting approaches, and security testing. Experience configuring and managing both server and personal computer hardware infrastructure.</p>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-4">Why Work With Me?</h3>
            <p className="text-lg text-gray-300 mb-4">
              I’m a software engineer and automation tester with a passion for creating efficient, reliable systems that make development and testing
              seamless. I enjoy designing scalable automation frameworks, improving CI/CD pipelines, and finding smart ways to enhance software quality.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              I'm detail-oriented, adaptable, and passionate about solving complex technical challenges. Whether it's architecting test frameworks, optimizing pipelines, or developing new features, I approach every problem with precision and creativity.
            </p>
            <p className="text-lg text-gray-300">
              Beyond tech, I'm an audio engineer and music producer. This combination of technical rigor and creative thinking helps me design elegant solutions and collaborate effectively across teams.
            </p>
          </div>

          <div className="pt-6 border-t border-red-800">
            <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-3">
              {['Playwright', 'JavaScript', 'TypeScript', 'React', 'CircleCI', 'K6', 'TestRail', 'WinAppDriver', 'TestComplete', 'Node.js'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 rounded text-white text-sm font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
