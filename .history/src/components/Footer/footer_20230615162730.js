import React from "react";

function Footer() {
  const gototop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-dark text-center text-white"
      style={
        height:"auto",
      }>
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <div className="d-flex justify-content-center">
              <div>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <div>
                <a
                  className="btn btn-outline-light btn-floating"
                  href="#!"
                  role="button"
                  style={{
                    height: "40px",
                  }}
                  onClick={gototop}
                >
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "black" }}>
          <a className="text-white" href="/#">
            Portfolio Anish
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
