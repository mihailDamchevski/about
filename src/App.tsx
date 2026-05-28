import { About } from "./components/sections/About";
import { Beat } from "./components/sections/Beat";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ScrollToTop } from "./components/ui/ScrollToTop";

function App() {
  return (
    <>
      <div className="cyber-shell min-h-screen flex flex-col bg-[var(--bg-deep)]">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Beat />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
