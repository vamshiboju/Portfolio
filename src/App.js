import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import "@fontsource/poppins";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Project1 from "./components/Projects/Project1";
import Project2 from "./components/Projects/Project2";
import Project3 from "./components/Projects/Project3";
import Project4 from "./components/Projects/project4";
import Project5 from "./components/Projects/Project5";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/connectingworld" element={<Project1 />} />
          <Route path="/chatapp" element={<Project2 />} />
          <Route path="/taskmate" element={<Project3 />} />
          <Route path="/moviehub" element={<Project4 />} />
          <Route path="/sortVisualizer" element={<Project5 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
