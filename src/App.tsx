import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Projects } from "./components/projects";

function App() {
  return (
    <>
      <Header />
      <main className="bg-emerald-900">
        <Home></Home>
        <About></About>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
