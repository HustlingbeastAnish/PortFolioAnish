import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import { motion } from "framer-motion";

function home() {
  return (
    <div className="container1">
      <motion.h1
        initial={{ color: "white", opacity: 0 }}
        animate={{ color: "#8c4646", scale: "1.3", y: -110, opacity: 1 }}
        transition={{ delay: 2, duration: 1.5, type: "spring", stiffness: 80 }}
      >
        Hello Everyone I am Anish Kumar Singh
      </motion.h1>
      <p className="intro">
        I am a Second Year CSE Undergrad at BIT MESRA.I like to explore all
        domains and learn new stuffs. My Hobbies Include Playing Table Tennis
        and Volleyball Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Praesentium eius et asperiores, incidunt animi quod eaque obcaecati,
        error rerum iusto odio temporibus? Esse labore quisquam ea ut cum
        tempora, ducimus hic qui non maiores! Corrupti, minus. Eveniet quibusdam
        mollitia facere ducimus laboriosam nesciunt recusandae, corporis
        assumenda, placeat illo quisquam ratione eaque saepe odio perspiciatis
        quis! Quam enim iusto, vero corrupti magnam similique voluptatem,
        exercitationem itaque dolores autem nesciunt rerum numquam animi
        accusantium! Quas ab doloremque accusantium exercitationem, quasi
        incidunt assumenda voluptate asperiores libero praesentium similique
        consequuntur deserunt voluptates vel officiis et alias quod
        necessitatibus, consectetur iste pariatur, dolor quibusdam. Accusamus!
      </p>
      <div className="typer">
        <Typewriter
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

export default home;
