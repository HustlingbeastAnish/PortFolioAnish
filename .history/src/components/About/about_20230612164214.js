import React from "react";
import "./about.css";
import { gsap } from "gsap";
import Anishlogo from "./aboutimages/imgs/Aboutimg1.jpeg";
import { motion } from "framer-motion";
import Class10 from "./aboutimages/imgs/cbse_new.png";
import { useEffect, useRef } from "react";
import Jee from "./aboutimages/imgs/BIT_LOGO.png";
import Aos from "aos";
import "aos/dist/aos.css";

function About(props) {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 0,
    });
  }, []);

  let logoItem = useRef(null);

  return (
    <>
      <div
        className="about"
        id="About"
        style={{
          backgroundColor: props.mode === "light" ? "gray" : "black",
        }}
      >
        <div className="content_about">
          <h2 className="h1about">About Me!</h2>
          <hr />
        </div>
        <div>
          <div className="containera mb-2 bg-dark">
            <img
              src={Anishlogo}
              alt="..."
              srcSet=""
              className="anishlogo"
              ref={logoItem}
            />
            <p>
              Hello Everyone! I am Anish Kumar Singh, 2025 CSE undergrad at
              Birla Institute of Technology Mesra. I like exploring technical
              domains and I am Interested in Problem solving and Web
              Development.
            </p>
          </div>
          <div className="containerC bg-dark">
            <div className="card-group ">
              <motion.div
                className="card m-3 p-2 bg-dark"
                style={{ flex: "0 0 18rem", maxWidth: "18rem" }}
                whileHover={{ scale: 1.1 }}
              >
                <img className="card-img-top" src={Class10} alt="" />
                <div className="card-body ">
                  <p className="card-text text-white">
                    Completed Class 10 From CBSE Board with 90.2 % in 2019
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="card m-3 p-2 bg-dark"
                style={{ flex: "0 0 18rem", maxWidth: "18rem" }}
                whileHover={{ scale: 1.1 }}
              >
                <img className="card-img-top" src={Class10} alt="" />
                <div className="card-body">
                  <p className="card-text text-white">
                    Completed Class 10 From CBSE Board with 93% in 2019
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="card m-3 p-2 bg-dark"
                style={{ flex: "0 0 18rem", maxWidth: "18rem" }}
                whileHover={{ scale: 1.1 }}
              >
                <img
                  className="card-img-top"
                  src={Jee}
                  alt=""
                  style={{
                    height: "170px",
                    width: "150px",
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-white">
                    Qualified Joint Entrance Examination Mains with an overall
                    Percentile of 98.256%ile
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
