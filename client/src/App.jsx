import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import { Details } from "./components/Details";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="w-full h-auto bg-[#000000] text-white">
     <div className="max-w-[1280px] mx-auto ">
      <Navbar/>
      <Hero/>
      <Details/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Copyright/>
     </div>
    </div>
  );
}

export default App;
