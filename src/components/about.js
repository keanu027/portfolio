import React from "react";
import "./css/about.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
// import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
// import AnchorLink from "react-anchor-link-smooth-scroll";

function About() {
  return (
    <React.Fragment>
      <div className="about" id="about">
        <h3 className="about-title">About Me</h3>
        <p className="content-about">
          Keanu Manly is a Philippines-based Web Developer who love to work in
          Productive Environment. I started learning Web Development back when i
          was in college. My first job was a Junior Developer in a BPO Company
          based in Utah.
        </p>

        <div className="resume">
          <div className="resume-content-educ">
            <p className="headertitle">Education </p>
            <p className="coursetitle">Boom Camp</p>
            <p className="company">• Boomsourcing.inc</p>
            <p className="course">
              <b>• Back-End Course</b> • October 2019 - February 2020
            </p>
            <p className="course">
              <b>• Front-End Course</b> • May 2019 - September 2020
            </p>

            <p className="course-content">
              An immersive software development bootcamp where I spent 4 months
              in each course's learning and working on various projects to build
              my Web Development skills.{" "}
              <a
                href="https://boom.camp/"
                rel="noopener noreferrer"
                target="_blank"
                className="boomcamp"
              >
                learn more about Boom Camp
              </a>
            </p>

            <p className="coursetitle">
              Bachelor of Science in Information Technology
            </p>
            <p className="company">• Forbes College</p>
          </div>

          <div className="resume-content-educ">
            <p className="headertitle">Work</p>
            <p className="coursetitle">Front-End Developer</p>
            <p className="company">• Boomsourcing.inc</p>
            <p className="course">• May 2019 - March 2020</p>

            <p className="course-content">- Create Restful APIs.</p>
            <p className="course-content">
              - Build Reusable, Responsive Components.
            </p>
            <p className="course-content">
              - Create clean and well document code to easily understand and
              maintain,and update the projects.
            </p>
          </div>

          <div className="resume-content-educ">
            <p className="headertitle">Skills </p>
            <p className="course-content">
              This is the Technologies I mainly uses.
            </p>
            <p className="skill-content">
              <span className="skills-container">
                • Front-End : <span className="skills-icons">HTML</span>{" "}
                <span className="skills-icons">CSS3</span>{" "}
                <span className="skills-icons">JAVASCRIPT</span>{" "}
                <span className="skills-icons">JQUERY</span>{" "}
                <span className="skills-icons">NODEJS</span>{" "}
                <span className="skills-icons">REACTJS</span>{" "}
                <span className="skills-icons">DOCKER</span>{" "}
                <span className="skills-icons">POSTGRESQL</span>{" "}
                <span className="skills-icons">MATERIAL UI</span>{" "}
                <span className="skills-icons">ANT DESIGN</span>{" "}
              </span>
            </p>
            <p className="skill-content">
              <span className="skills-container">
                • Back-End : <span className="skills-icons">PYTHON</span>{" "}
                <span className="skills-icons">DJANGO</span>
              </span>
            </p>
            <p className="skill-content">
              <span className="skills-container">
                • Version Control : <span className="skills-icons">GIT</span>{" "}
                <span className="skills-icons">GITHUB</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
