import React from "react";
import "./experience.css";
import { motion } from "framer-motion";
function experience() {
  return (
    <>
      <div className="skills1 ">
        <div className="container d-flex flex-column align-items-center mt-4 text-dark">
          <h1
            style={{
              color: "white",
            }}
          >
            Skills!
          </h1>
          <div className="container d-flex flex-row mt-3">
            <div
              className="card mx-5 my-5"
              style={{
                width: "18rem",
                // transition: "all 1s ease-in-out",
              }}
            >
              <img
                className="card-img-top"
                src="https://www.tutorialrepublic.com/lib/images/html-illustration.png"
                alt=""
              />
              <div className="card-body">
                <p className="card-text text-dark">HTML</p>
              </div>
            </div>
            <div
              className="card mx-5 my-5"
              style={{
                width: "18rem",
              }}
            >
              <img
                className="card-img-top"
                src="https://www.tutorialrepublic.com/lib/images/css-illustration.png"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">CSS</p>
              </div>
            </div>
            <div
              className="card mx-5 my-5"
              style={{
                width: "18rem",
              }}
            >
              <img
                className="card-img-top"
                src="https://www.tutorialrepublic.com/lib/images/bootstrap-5.0-illustration.png"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">Bootstrap</p>
              </div>
            </div>
            <div
              className="card mx-5 my-5"
              style={{
                width: "18rem",
              }}
            >
              <img
                className="card-img-top"
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">JS</p>
              </div>
            </div>
          </div>
          <div className="container d-flex flex-row">
            <div
              className="card mx-5 my-5"
              style={{
                width: "18rem",
              }}
            >
              <img
                className="card-img-top h-50"
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">React JS</p>
              </div>
            </div>
            <div
              className="card mx-5 my-5"
              style={{
                width: "18rem",
              }}
            >
              <img
                className="card-img-top "
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">Node JS</p>
              </div>
            </div>
            <div
              className="card mx-5 my-5"
              style={{
                width: "18rem",
              }}
            >
              <img
                className="card-img-top"
                src="https://www.hugeserver.com/kb/wp-content/uploads/2017/12/expresslogo.png"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">Express JS</p>
              </div>
            </div>
            <div
              className="card mx-5 my-5"
              style={{
                width: "18rem",
              }}
            >
              <img
                className="card-img-top"
                src="https://res.cloudinary.com/hevo/image/upload/f_auto,q_auto/v1644403814/hevo-learn/springboot_MongoDB_configuration_mongodb.jpg?_i=AA"
                alt=""
              />
              <div className="card-body">
                <p className="card-text">MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default experience;
