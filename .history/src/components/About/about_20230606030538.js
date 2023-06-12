import React, { useRef } from "react";
import "./about.css";
import { motion } from "framer-motion";
import Anishlogo from "./aboutimages/imgs/Aboutimg1.jpeg";
import Class10 from "./aboutimages/imgs/aboutresult1.jpg";
import Jee from "./aboutimages/imgs/aboutresult3.jpg";

function About(props) {
  let logoItem = useRef(null);

  return (
    <>
      <div
        className="about"
        id="About"
        style={{
          backgroundColor:
            props.mode === "light" ? "rgb(170, 153, 153)" : "black",
        }}
      >
        <div className="content_about">
          <h2 className="h1about">About Me!</h2>
          <hr />
        </div>
        <div className="container d-flex align-items-center">
          <img src={Anishlogo} alt="..." className="anishlogo" ref={logoItem} />
          <div className="containera">
            <p>
              Hey Everyone, I am Anish Kumar Singh, a Second-year Computer
              Science Undergrad at Birla Institute of Technology Mesra.
            </p>
          </div>
        </div>
        <div className="container d-flex">
          <motion.div
            className="card m-5 p-2"
            style={{ width: "18rem" }}
            whileHover={{ scale: 1.1 }}
          >
            <img className="card-img-top" src={Class10} alt="" />
            <div className="card-body">
              <p className="card-text">
                Completed Class 10 CBSE Board Examination with an overall
                percentage of 90.2%
              </p>
            </div>
          </motion.div>
          <motion.div
            className="card m-5 p-2"
            style={{ width: "18rem" }}
            whileHover={{ scale: 1.1 }}
          >
            <img className="card-img-top" src={Class10} alt="" />
            <div className="card-body">
              <p className="card-text">
                Class 12 CBSE Board Examination with an overall percentage of
                93.0%
              </p>
            </div>
          </motion.div>
          <motion.div
            className="card m-5 p-2"
            style={{ width: "18rem" }}
            whileHover={{ scale: 1.1 }}
          >
            <img
              className="card-img-top"
              src={Jee}
              alt=""
              style={{
                height: "200px",
              }}
            />
            <div className="card-body">
              <p className="card-text">
                Qualified Joint Entrance Examination Mains with an overall
                Percentile of 98.256%ile
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
