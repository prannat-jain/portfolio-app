import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="snapContainer">
      <Navbar />
      <div id="home" className="snapSection">
        <Home />
      </div>
      <div id="about" className="snapSection">
        <About />
      </div>
      <div className="snapSection">
        <Skills />
      </div>
      <div className="snapSection">
        <Experience />
      </div>
      <div className="snapSection">
        <Projects />
      </div>
      <div className="snapSection">
        <Contact />
      </div>
      <h3>This website is under development. Be back for more soon!</h3>
    </div>
  );
}

export default App;
