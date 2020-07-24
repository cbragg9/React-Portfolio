import React from "react";

function Portfolio() {
  const projects = [
    {
      title: "Uplift",
      GIF: "https://media.giphy.com/media/SScwjKHmBwcMZcs2O0/giphy.gif",
      description: "Group Project: Add and support black-owned businesses and stay up to date on the latest BLM news/events with this full stack web app.",
      github: "https://github.com/cbragg9/Uplift",
      deployed: "https://project-uplift.herokuapp.com/",
      type: "MVC, MySQL/Sequelize, Express, Handlebars, Node, jQuery, Puppeteer Web Scraping, Passport/bcrypt Local Auth, Third-Party APIs, Bootstrap CSS",
      keyName: 1
    },
    {
      title: "Recipe Master",
      GIF: "https://media.giphy.com/media/jTkhRYlE4NuXmkAegg/giphy.gif",
      description: "Group Project: Find recipe's online using the ingredients you have at home using this front-end API site.",
      github: "https://github.com/cbragg9/Recipe-Master",
      deployed: "https://cbragg9.github.io/Recipe-Master/",
      type: "Front-end AJAX, GitHub Issue Tracker, Third-Party APIs, jQuery, Bulma CSS",
      keyName: 2
    },
    {
      title: "React: Employee Directory",
      GIF: "https://media.giphy.com/media/h5L8qBkYKfXy9Iv3Cg/giphy.gif",
      description: "An employee directory broken into React components, managing state, and responding to user events.",
      github: "https://github.com/cbragg9/React-EmployeeDirectory",
      deployed: "https://cbragg9.github.io/React-EmployeeDirectory/",
      type: "Create React App, Third-Party API, React Components/State/Prop-Drilling, Bootstrap CSS",
      keyName: 3
    },
    {
      title: "PWA: Budget Tracker (NoSQL)",
      GIF: "https://media.giphy.com/media/TL6lyL4VtCOMPbYc6z/giphy.gif",
      description: "Full stack Progressive Web Application Budget Tracker allowing online and offline functionality.",
      github: "https://github.com/cbragg9/PWA-Budget-Tracker",
      deployed: "https://budget-tracker-cbraggdev.herokuapp.com/",
      type: "Express, MongoDB/Mongoose, Service Worker, IndexedDB, Cache API, webmanifest",
      keyName: 4
    },
    {
      title: "MongoDB Workout Tracker",
      GIF: "https://media.giphy.com/media/jTkhRYlE4NuXmkAegg/giphy.gif",
      description: "View, create, and track daily workouts on this app built using MongoDB/Mongoose and Express.",
      github: "https://github.com/cbragg9/NoSQL-Workout-Tracker",
      deployed: "https://fitness-tracker-cbraggdev.herokuapp.com/",
      type: "Express, MongoDB/Mongoose, fetch, async/await",
      keyName: 5
    },
    {
      title: "SQL Employee Tracker",
      GIF: "https://media.giphy.com/media/PjaiB8hO9BN2QerrIo/giphy.gif",
      description: "A CLI employee management system using Node.js, Inquirer, and MySQL.",
      github: "https://github.com/cbragg9/SQL-Employee-Tracker",
      deployed: "https://www.youtube.com/watch?v=YPeN6KEYjOI&feature=youtu.be",
      type: "Express, MySQL CRUD/Joins, Node, Inquirer",
      keyName: 6
    },
    {
      title: "Eat The Burger",
      GIF: "https://media.giphy.com/media/keZbUpvJqaaO5l55qU/giphy.gif",
      description: "Full stack web page utilizing MySQL CRUD, Node, Express, Handlebars,jQuery, ORM, and a MVC design pattern",
      github: "https://github.com/cbragg9/Eat-The-Burger",
      deployed: "https://lit-castle-73053.herokuapp.com/",
      type: "Express, Express-Handlebars, MySQL CRUD, MVC, Bootstrap CSS",
      keyName: 7
    },
    {
      title: "Space Adventure!",
      GIF: "https://media.giphy.com/media/jqYZ5fV51Qjpxhfx8U/giphy.gif",
      description: "Fly around and destroy JavaScript class-based generated asteroids utilizing HTML canvas.",
      github: "https://github.com/cbragg9/Space-Adventure",
      deployed: "https://cbragg9.github.io/Space-Adventure/",
      type: "HTML Canvas, ES6 Classes, State Management, OOP Principles",
      keyName: 8
    },
    {
      title: "Cocktail Cards",
      GIF: "https://media.giphy.com/media/Q8C7wk8SZa8031NA3k/giphy.gif",
      description: "Search, sort, and filter for drinks using the Cocktail DB API.",
      github: "https://github.com/cbragg9/Cocktail-Cards",
      deployed: "https://cbragg9.github.io/Cocktail-Cards/",
      type: "Front-end AJAX, Third-Party API, jQuery, Modals, Bulma CSS",
      keyName: 9
    },
    {
      title: "Weather Dashboard",
      GIF: "https://media.giphy.com/media/gKTTZ5rp7Fbq8vLJXU/giphy.gif",
      description: "Find the 5 day forecast for any city in the world using OpenWeather API.",
      github: "https://github.com/cbragg9/Weather-Dashboard",
      deployed: "https://cbragg9.github.io/Weather-Dashboard/",
      type: "Front-end AJAX, Third-Party API, jQuery, Bootstrap CSS",
      keyName: 10
    }
  ]

  return (
    <main>
      <h1 className="text-center mt-5 letter-spaced" id="portfolio-section">PROJECTS</h1>
      <h6 className="text-center mb-5 letter-spaced" id="portfolio-section">*Please allow Heroku deployed apps a few seconds to wake up.</h6>
      {projects.map(project => {
        return (
          <div className="container" key={project.keyName}>
            <div className="row mt-4 mt-md-2">
              <div className="col-md-4 my-auto">
                <img src={project.GIF} className="card-img" alt={project.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text"><small className="text-muted">Utilizes: {project.type}</small></p>
                  <a className="btn left-button" href={project.github} target="_blank" rel="noopener noreferrer"
                    role="button">GitHub</a>
                  <a className="btn right-button" href={project.deployed} target="_blank" rel="noopener noreferrer"
                    role="button">Deployed</a>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <a href="#portfolio-section"><i className="fas fa-chevron-circle-up fa-2x"></i></a>
    </main>
  )
}

export default Portfolio;