import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Home from "./components/Home/home";
import Project from "./components/Project/project";
import Experience from "./components/Experience/experience";
import { motion } from "framer-motion";
import Footer from "./components/Footer/footer";
import Codeforces from "./components/Codeforces/Codeforces";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRef } from "react";

// Animation Stuffs
const NavbarVariant = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: "-3.5vh",
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1.5,
      type: "spring",
      stiffness: 130,
    },
  },
};

const HomeVariant = {
  hidden: { x: "-100vw", y: "100vh" },
  visible: {
    x: "0vw",
    y: "4.6vh",
    transition: {
      delay: 0.7,
      duration: 1.5,
      type: "spring",
      stiffness: 70,
      // mass: 0.4,
      // damping: 8,
    },
  },
};

function App() {
  const about = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const codeforces = useRef(null);
  return (
    <>
      <motion.div variants={NavbarVariant} initial="hidden" animate="visible">
        <Navbar
          about={about}
          skill={skills}
          project={project}
          codeforces={codeforces}
        />
      </motion.div>
      <motion.div variants={HomeVariant} initial="hidden" animate="visible">
        <Home />
      </motion.div>
      <div ref={about}>
        <About />
      </div>
      <div ref={skills}>
        <Experience />
      </div>
      <div ref={project}>
        <Project />
      </div>
      <div ref={codeforces}>
        <Codeforces />
      </div>
      <Footer />
    </>
  );
}
export default App;
