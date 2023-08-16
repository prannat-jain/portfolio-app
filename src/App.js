import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import WorkExp from "./components/WorkExp";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <WorkExp />
      <Projects />
      {/*<Contact />*/}
    </div>
  );
}

export default App;
