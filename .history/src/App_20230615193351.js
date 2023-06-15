import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Home from "./components/Home/home";
import Project from "./components/Project/project";
import Experience from "./components/Experience/experience";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRef, useState } from "react";
// import GotoTop from "./components/GotoTop/gototop";

// Animation Stuffs
const NavbarVariant = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: "-1.5vh",
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
    y: "6vh",
    transition: {
      delay: 0.7,
      duration: 1.5,
      type: "spring",
      stiffness: 70,
    },
  },
};

function App() {
  const [mode, setmode] = useState("dark");

  const { scrollYProgress } = useScroll();
  const [alert, setalert] = useState(null);

  // const [ShowContact, SetShowContact] = useState(false);
  const ToggleMode = () => {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const codeforces = useRef(null);
  return (
    <Router>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <motion.div variants={NavbarVariant} initial="hidden" animate="visible">
        <Navbar
          about={about}
          skills={skills}
          project={project}
          codeforces={codeforces}
          mode={mode}
          ToggleMode={ToggleMode}
        />
      </motion.div>
      <motion.div variants={HomeVariant} initial="hidden" animate="visible">
        <Home mode={mode} />
      </motion.div>
      <motion.div
        variants={HomeVariant}
        initial="hidden"
        animate="visible"
        ref={about}
      >
        <About mode={mode} />
      </motion.div>
      <motion.div
        variants={HomeVariant}
        initial="hidden"
        animate="visible"
        ref={skills}
      >
        <Experience mode={mode} />
      </motion.div>
      <motion.div
        variants={HomeVariant}
        initial="hidden"
        animate="visible"
        ref={project}
      >
        <Project mode={mode} />
      </motion.div>
      <div>{<Footer mode={mode} />}</div>
    </Router>
  );
}
export default App;
