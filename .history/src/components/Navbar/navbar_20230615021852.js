import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const gotoServices = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} text-light `}
        style={{
          cursor: "pointer",
          color: `${props.mode === "light" ? "black" : "white"}`,
        }}
      >
        <div className="container-fluid" id="nav">
          <Link className="navbar-brand text-light" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item"
                onClick={() => {
                  gotoServices(props.home);
                }}
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                  transition: "color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  if (window.matchMedia("(min-width: 1000px)").matches) {
                    // Apply hover effect only when the minimum width is 1000px or more
                    e.target.style.color = "blue";
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.matchMedia("(min-width: 1000px)").matches) {
                    // Apply hover effect only when the minimum width is 1000px or more
                    e.target.style.color = `${
                      props.mode === "light" ? "black" : "white"
                    }`;
                  }
                }}
              >
                Home
              </li>
              {/* Rest of the menu items... */}
              {/* ... */}
              <li
                className="nav-item"
                onClick={() => {
                  gotoServices(props.project);
                }}
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
                onMouseEnter={(e) => {
                  if (window.matchMedia("(min-width: 1000px)").matches) {
                    // Apply hover effect only when the minimum width is 1000px or more
                    e.target.style.color = "blue";
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.matchMedia("(min-width: 1000px)").matches) {
                    // Apply hover effect only when the minimum width is 1000px or more
                    e.target.style.color = `${
                      props.mode === "light" ? "black" : "white"
                    }`;
                  }
                }}
              >
                Projects
              </li>
            </ul>
            {/* Remaining code */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
