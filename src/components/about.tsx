export const About = () => (
  <section id="about" className="mx-auto flex items-center justify-center">
    <div className="container mx-auto px-6 text-white">
      <h2 className="mt-5 text-4xl font-bold mb-8 text-center text-shadow " data-aos="fade-down">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right"></div>
        <div data-aos="fade-left">
          <p className="text-lg mb-6">
            I’m a software engineer and automation tester with a passion for creating efficient, reliable systems that make development and testing
            seamless. I enjoy designing scalable automation frameworks, improving CI/CD pipelines, and finding smart ways to enhance software quality.
          </p>
          <p className="text-lg mb-6">
            Beyond tech, I’m also an audio engineer and music producer, combining creativity and technical precision in both code and sound. I’m
            driven by curiosity, problem-solving, and the pursuit of building things that work beautifully—whether it’s software or music.
          </p>
          <div className="flex space-x-4">
            <i className="fab fa-html5 text-4xl"></i>
            <i className="fab fa-css3-alt text-4xl"></i>
            <i className="fab fa-js-square text-4xl"></i>
            <i className="fab fa-react text-4xl"></i>
            <i className="fab fa-node-js text-4xl"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
);
