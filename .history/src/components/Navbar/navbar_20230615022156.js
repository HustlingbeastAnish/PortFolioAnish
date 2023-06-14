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
                  transition: "color 0.3s", // Added transition for smooth color change
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "blue";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = `${
                    props.mode === "light" ? "black" : "white"
                  }`;
                }}
              >
                Home
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  gotoServices(props.about);
                }}
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "blue";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = `${
                    props.mode === "light" ? "black" : "white"
                  }`;
                }}
              >
                About
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  gotoServices(props.skills);
                }}
                style={{
                  padding: "5px 8px",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "blue";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = `${
                    props.mode === "light" ? "black" : "white"
                  }`;
                }}
              >
                Skills
              </li>
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
                  if (window.innerWidth > 1000) {
                    // Apply hover effect only when width is greater than 1000px
                    e.target.style.color = "blue";
                    e.target.style.transform = "scale(1.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth > 1000) {
                    // Apply hover effect only when width is greater than 1000px
                    e.target.style.color = `${
                      props.mode === "light" ? "black" : "white"
                    }`;
                    e.target.style.transform = "scale(1)";
                  }
                }}
              >
                Projects
              </li>
            </ul>
            <div className="form-check form-switch p-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.ToggleMode}
                id="flexSwitchCheckChecked"
              />
              <label
                className="form-check-label px-2"
                htmlFor="flexSwitchCheckChecked"
                style={{
                  cursor: "pointer",
                  color: `${props.mode === "light" ? "black" : "white"}`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "blue";
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = `${
                    props.mode === "light" ? "black" : "white"
                  }`;
                  e.target.style.transform = "scale(1)";
                }}
              >
                Enable {props.mode === "light" ? "dark" : "light"} mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
