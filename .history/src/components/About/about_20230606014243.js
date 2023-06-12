import React, { useEffect, useRef } from "react";
import "./about.css";
import { gsap } from "gsap";
import Anishlogo from "./aboutimages/imgs/Aboutimg1.jpeg";
import { motion } from "framer-motion";
import Class10 from "./aboutimages/imgs/aboutresult1.jpg";
import Jee from "./aboutimages/imgs/aboutresult3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function About(props) {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  let logoItem = useRef(null);
  useEffect(() => {
    gsap.to(logoItem.current, {
      rotation: 360,
      duration: 30,
      ease: "bounce.out",
    });
  }, []);

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
        <div
          className="container d-flex align-items-center"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <img
            src={Anishlogo}
            alt="Anish Kumar Singh"
            className="anishlogo"
            ref={logoItem}
          />
          <div className="containera">
            <p>
              Hey everyone, I'm Anish Kumar Singh, a second-year Computer
              Science undergraduate at Birla Institute of Technology Mesra.
            </p>
          </div>
        </div>
        <div className="container d-flex flex-wrap justify-content-center">
          <div
            className="card m-3 p-2"
            style={{ width: "18rem" }}
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img className="card-img-top" src={Class10} alt="" />
            <div className="card-body">
              <p className="card-text">
                Completed Class 10 CBSE Board Examination with an overall
                percentage of 90.2%
              </p>
            </div>
          </div>
          <div
            className="card m-3 p-2"
            style={{ width: "18rem" }}
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img className="card-img-top" src={Class10} alt="" />
            <div className="card-body">
              <p className="card-text">
                Completed Class 12 CBSE Board Examination with an overall
                percentage of 93.0%
              </p>
            </div>
          </div>
          <div
            className="card m-3 p-2"
            style={{ width: "18rem" }}
            data-aos="flip-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img
              className="card-img-top"
              src={Jee}
              alt=""
              style={{ height: "200px" }}
            />
            <div className="card-body">
              <p className="card-text">
                Qualified Joint Entrance Examination (JEE) Mains with an overall
                percentile of 98.256
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
