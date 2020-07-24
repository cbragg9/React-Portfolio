import React from "react";

function About() {

  return (
    <main>
      <section className="container-fluid my-5" id="about-me-section">
        <div className="row text-center about-row">
          <div className="col-12 offset-lg-2 col-lg-4 about-bio">
            <h3>About Chris</h3>
            <p>Thank you for visiting my portfolio! After graduating with a BS in Molecular Biology from Univ. of Washington and spending 8
            years working and managing DNA sequencing in clinical biotech laboratories, I'm now looking to learn the "tech" side of Biotech.
        </p>
            <p>I began Univ of Washington's Full Stack Coding Bootcamp in February 2020, starting me down this career path of continual learning.
            I learned the fundamentals of Web Development technologies focused primarily with the MERN stack. I supplemented my coursework with
            uDemy courses on data structures and algorithms and learning in C#.
        </p>
            <p>In my free time I'm an avid gamer, I enjoy sports (go Hawks/Sounders!), camping/backpacking, and traveling both domestic
            and abroad. This picture was taken in Tokyo, Japan after go-karting around Shibuya with my good
        friends Mario, Luigi, and Peach. Please reach out anytime, see footer for contact info.</p>
          </div>
          <div className="col-12 col-lg-4">
            <img src={process.env.PUBLIC_URL + '/assets/bio-pic.jpg'} className="img-fluid about-pic" alt="cbragg-pic" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default About;