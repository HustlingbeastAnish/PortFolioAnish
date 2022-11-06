import React from "react";

function navbar(props) {
  return (
    <>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-dark text-light"
        id="navv"
      >
        <div className="container-fluid" id="nav">
          <a className="navbar-brand text-light" href="/#">
            {props.title}
          </a>
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
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/#">
                  Project Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/#">
                  Codeforces
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-light"
                type="submit"
              >
                Search
              </button>
            </form> */}

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.ToggleMode}
                id="flexSwitchCheckChecked"
              />
              <label
                className="form-check-label text-light"
                htmlFor="flexSwitchCheckChecked"
              >
                Enable dark mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
