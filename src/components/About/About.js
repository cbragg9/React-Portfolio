import React from "react";

function About() {

  return (
    <main>
      <section className="container-fluid my-5" id="about-me-section">
        <div className="row text-center about-row">
          <div className="col-12 offset-lg-2 col-lg-4 about-bio">
            <h3>About Chris</h3>
            <p>
              Thank you for visiting my portfolio! After graduating with a BS in Molecular Biology from University of Washington in 2012 and spending 8
              years working and managing clinical biotech Next-Gen Sequencing laboratories, I'm now looking to learn the "tech" side of biotech
              and challenge myself in this dynamic field.
            </p>
            <p>
              I took University of Washington's Full Stack Coding Bootcamp from Feb-Aug 2020, starting me down this career path of continual learning.
              I studied the fundamentals of Web Development technologies focused primarily with the MERN stack, and supplemented my coursework with
              online courses on data structures and algorithms and learning in C#/Unity.
            </p>
            <p>
              In my free time I'm an avid gamer, I enjoy sports (go Hawks/Sounders/Kraken!), camping/backpacking, and traveling both domestic
              and abroad. This picture was taken in Tokyo, Japan after go-karting around Shibuya with my good friends Mario, Luigi, and Peach. Please reach out anytime, see footer for contact info.
            </p>
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