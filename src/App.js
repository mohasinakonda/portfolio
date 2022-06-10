import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Componnts/About-me/About";
import Hero from "./Componnts/Hero/Hero";
import Navbar from "./Componnts/Navbar/Navbar";
import JavascriptProjects from "./Componnts/Projects/JavascriptProjects";
import Mern from "./Componnts/Projects/Mern";
import Projects from "./Componnts/Projects/Projects";
import ProjectsNav from "./Componnts/Projects/ProjectsNav";
import ReactProjects from "./Componnts/Projects/ReactProjects";
import Skills from "./Componnts/Skills/Skills";

function App() {
  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-gradient-to-l hover:bg-gradient-to-r lg:px-24">
        <Navbar></Navbar>
        <Hero />
      </div>
      <div>
        <About></About>
        <div className="h-[3px] bg-cyan-100 shadow-xl"></div>
      </div>
      <Skills />

      <ProjectsNav />

      <Routes>
        <Route path="about-me" element={<About></About>}></Route>

        <Route path="/projects" element={<Projects />}>
          <Route index element={<Mern />}></Route>
          <Route path="mern-project" element={<Mern />}></Route>
          <Route path="react-project" element={<ReactProjects />}></Route>
          <Route
            path="javascript-project"
            element={<JavascriptProjects />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
