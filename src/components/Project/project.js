import React from "react";
import "./project.css";
import Pr1 from "./Projectimages/Project1.jfif";
import Pr2 from "./Projectimages/Project2.jfif";
function project() {
  return (
    <>
      <div className="containerProj">
        <h1 style={{ color: "white" }}>Projects!</h1>
        <div className="container d-flex">
          <div className="containerp">
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr1} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr2} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="containerp">
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr1} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr2} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="containerp">
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr1} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card mx-5 my-5" style={{ width: "18rem" }}>
              <img src={Pr2} className="card-img-top" alt="..." />
              <div className="card">
                <div className="card-header">Featured</div>
                <a href="/#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default project;
