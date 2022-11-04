import React from "react";
import "./about.css";
import Anishlogo from "./aboutimages/imgs/Aboutimg1.jpeg";
function about() {
  return (
    <>
      <div className="about">
        <div className="content_about">
          <h2>About Me!</h2>
          <hr />
          <p className="para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            reiciendis ad laborum voluptas temporibus nesciunt accusamus
            perferendis maiores veniam, aperiam necessitatibus blanditiis
            ducimus molestias obcaecati harum? Officiis ut natus sed, sit odit
            voluptatem quo sequi tenetur ab pariatur praesentium voluptas
            temporibus est optio numquam tempore vitae culpa, magnam ducimus
            veniam expedita maxime consequatur ratione. Quae.
          </p>
        </div>
        <div className="container d-flex mt-5">
          <img src={Anishlogo} alt="..." srcSet="" className="anishlogo" />
          <img src="" alt="" />
          <div className="container">
            <div className="container max-height w-50 h-75 p-3 d-flex align-items-center">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="5000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://image.shutterstock.com/image-vector/applying-job-giving-cv-competition-600w-682454728.jpg"
                      //   className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>...</h5>
                      <p>...</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://image.shutterstock.com/image-photo/time-new-job-business-concept-600w-518303563.jpg"
                      //   className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>...</h5>
                      <p>...</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://image.shutterstock.com/image-photo/female-hand-holds-black-binoculars-600w-1786416293.jpg"
                      //   className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>...</h5>
                      <p>...</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://image.shutterstock.com/image-photo/female-hand-holds-black-binoculars-600w-1786416293.jpg"
                      //   className="d-block w-100"
                      alt="..."
                    />
                    {/* <div className="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div> */}
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://image.shutterstock.com/image-photo/female-hand-holds-black-binoculars-600w-1786416293.jpg"
                      //   className="d-block w-100"
                      alt="..."
                    />
                    {/* <div className="carousel-caption d-none d-md-block">
                  <h5>...</h5>
                  <p>...</p>
                </div> */}
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon "
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
