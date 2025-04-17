import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="bg-[#0a0a1a] min-h-screen text-white">
      <Navbar />
      <div id="content">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="work" className="section">
          <Projects />
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
