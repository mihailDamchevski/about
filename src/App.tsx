import { About } from "./components/about";
import { Beat } from "./components/beat";
import { Layout } from "./components/layout";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

function App() {
  return (
    <div className="bg-red-950 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <About />
        <Projects />
        <Beat />
      </main>
      <Footer />
    </div>
  );
}

export default App;
