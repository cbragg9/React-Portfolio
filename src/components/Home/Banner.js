import React from "react";

function Banner() {

  return (
    <section className="container-fluid my-5" id="banner-section">
      <div className="row text-center">
        <h1 className="col-12 letter-spaced">FULL STACK DEVELOPER</h1>
        <h4 className="col-12">Christopher Bragg</h4>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <a href="./assets/resume.pdf" target="_blank">
            <span className="span-links badge badge-primary" id="resume-span">Resume</span>
          </a>
          <a href="https://www.linkedin.com/in/cbragg9/" target="_blank" rel="noopener noreferrer">
            <span className="span-links badge badge-primary" id="linkedin-span">LinkedIn</span>
          </a>
          <a href="https://github.com/cbragg9" target="_blank" rel="noopener noreferrer">
            <span className="span-links badge badge-primary" id="github-span">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Banner;