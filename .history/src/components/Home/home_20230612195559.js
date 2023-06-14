import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
// import DAnimation from "../DAnimation/App";
function Home(props) {
  const [heading, setheading] = useState(true);
  setInterval(() => {
    setheading(false);
  }, 9000);

  const [fontSize, setFontSize] = useState("80px");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setFontSize("80px");
      } else if (screenWidth >= 768) {
        setFontSize("60px");
      } else {
        setFontSize("40px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="container1"
      style={{
        backgroundColor: props.mode === "light" ? "gray" : "black",
      }}
    >
      <AnimatePresence>
        {
          <motion.h1
            initial={{ color: "white", opacity: 0 }}
            animate={{
              color: "white",
              scale: "1.3",
              fontSize: "80px",
              y: -150,
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
              duration: 3.5,
              type: "spring",
              stiffness: 80,
            }}
            exit={{
              y: [-50, 190, -50, 190, -50, 190],
              opacity: 1,
            }}
            id="h1home"
          >
            Hello Everyone I am Anish Kumar Singh
          </motion.h1>
        }
      </AnimatePresence>
      <h2 id="h2home">I'm a </h2>
      <div className="typer">
        <Typewriter
          style={{ color: props.mode === "light" ? "black" : "white" }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString("Learner")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Programmer")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Developer")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Data Structures Enthusiast")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Developer")
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default Home;
