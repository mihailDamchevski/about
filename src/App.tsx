import { About } from "./components/about";
import { Beat } from "./components/beat";
import { Center } from "./components/center";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

function App() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <Center>
          <About></About>
          <Projects></Projects>
        </Center>
        <Beat />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
