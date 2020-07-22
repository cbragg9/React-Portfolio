import React from "react";

function SkillsIcons() {

  return (
    <section className="container-fluid" id="skills-section">
      <div className="row text-center" id="skills-row">
        <div className="col-12 col-md-6 mb-3">
          <i className="fas fa-3x fa-laptop-code"></i>
          <h3 className="mt-2">BROWSER</h3>
          <p className="letter-spaced">HTML/CSS/JS, jQuery, React, PWAs</p>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <i className="fas fa-3x fa-server"></i>
          <h3 className="mt-2">SERVER</h3>
          <p className="letter-spaced">Express, Node, Handlebars</p>
        </div>
        <div className="col-12 mb-3">
          <i className="fas fa-3x fa-database"></i>
          <h3 className="mt-2">DATABASE</h3>
          <p className="letter-spaced">MySQL/Sequelize, MongoDB/Mongoose</p>
        </div>
      </div>
    </section>
  )
}

export default SkillsIcons;