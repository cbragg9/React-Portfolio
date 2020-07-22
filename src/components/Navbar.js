import React from "react";

function Navbar() {

  return (
    <div className="container-fluid" id="top-of-page">
      <div className="row nav-row">
        <div className="col-12 d-flex justify-content-center mt-lg-4">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" id="about-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="home-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="portfolio-link" href="/portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;