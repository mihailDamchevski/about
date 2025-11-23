import { About } from "./components/about";
import { Beat } from "./components/beat";
import { Layout } from "./components/layout";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";

function App() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <Layout>
          <About></About>
          <Projects></Projects>
        </Layout>
        <Beat />
      </main>
      <Footer />
    </>
  );
}

export default App;
