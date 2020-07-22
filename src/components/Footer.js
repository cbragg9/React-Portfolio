import React from "react";

function Footer() {

  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-12 text-center">
          <a href="./assets/resume.pdf" target="_blank" className="profile-links">
            <i className="fas fa-file"></i>
          </a>
          <a href="https://www.linkedin.com/in/cbragg9/" target="_blank" rel="noopener noreferrer" className="profile-links">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/cbragg9" target="_blank" rel="noopener noreferrer" className="profile-links">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;