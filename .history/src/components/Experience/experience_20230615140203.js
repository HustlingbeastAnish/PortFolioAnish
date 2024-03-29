import React from "react";
import "./experience.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import s1 from "./skillsimages/imgs/skill1.png";
import s2 from "./skillsimages/imgs/skill2.png";
import s3 from "./skillsimages/imgs/skill3.png";
import s4 from "./skillsimages/imgs/skill4.png";
import s5 from "./skillsimages/imgs/skill5.png";
import s6 from "./skillsimages/imgs/skill6.png";
import s7 from "./skillsimages/imgs/skill7.png";
import s8 from "./skillsimages/imgs/skill8.webp";
import { useEffect } from "react";

const Experience = (props) => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <div
        className="skills1"
        style={{
          backgroundColor: props.mode === "light" ? "gray" : "black",
          height: "auto",
        }}
      >
        <div className="container d-flex flex-column align-items-center mt-4 text-dark">
          <h1
            style={{
              color: "white",
            }}
          >
            Skills!
          </h1>
          <div className="row grid-row">
            <div className="col grid-col">
              <div className="card mx-5 my-3" style={{ width: "18rem" }}>
                <motion.div
                  className="card-img-top"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={s1}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
                <div className="card-body">
                  <p className="card-text text-dark">HTML</p>
                </div>
              </div>
              <div className="card mx-5 my-3" style={{ width: "18rem" }}>
                <motion.div
                  className="card-img-top"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={s2}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
                <div className="card-body">
                  <p className="card-text">CSS</p>
                </div>
              </div>
              <div className="card mx-5 my-3" style={{ width: "18rem" }}>
                <motion.div
                  className="card-img-top"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={s3}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
                <div className="card-body">
                  <p className="card-text">Bootstrap</p>
                </div>
              </div>
              <div className="card mx-5 my-3" style={{ width: "18rem" }}>
                <motion.div
                  className="card-img-top"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={s4}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
                <div className="card-body">
                  <p className="card-text">JS</p>
                </div>
              </div>
              <div className="card mx-5 my-3" style={{ width: "18rem" }}>
                <motion.div
                  className="card-img-top h-50"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={s5}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
                <div className="card-body">
                  <p className="card-text">React JS</p>
                </div>
              </div>
              <div className="card mx-5 my-3" style={{ width: "18rem" }}>
                <motion.div
                  className="card-img-top"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={s6}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
                <div className="card-body">
                  <p className="card-text">Node JS</p>
                </div>
              </div>
              <div className="card mx-5 my-3" style={{ width: "18rem" }}>
                <motion.div
                  className="card-img-top"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={s7}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
                <div className="card-body">
                  <p className="card-text">Express JS</p>
                </div>
              </div>
              <div className="card mx-5 my-3" style={{ width: "18rem" }}>
                <motion.div
                  className="card-img-top"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={s8}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </motion.div>
                <div className="card-body">
                  <p className="card-text">MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
