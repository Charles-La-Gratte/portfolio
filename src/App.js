import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home"; 
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
   <main>
      <NavBar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
   </main>
  );
}

export default App;
