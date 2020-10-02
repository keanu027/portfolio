import React from "react";
import "./css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  return (
    <React.Fragment>
      <div className="home" id="home">
        <h1 className="title">Hi, I'm Keanu Manly</h1>
        <p className="content">
          Nice to meet you! I'm Front-End Developer from the Philippines
          experience creating web applications. who loves working on Creative
          Idea, Designing and Creating Intuitive, Fast, Dynamic, Responsive
          Website into reality. and i love to work with a team and project
          collaborations. Let's work together.{" "}
          <a
            className="getintouch"
            href="mailto:manlykeanu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get in touch
          </a>
        </p>
        <div className="icons">
          <a
            href="https://github.com/keanu027"
            rel="noopener noreferrer"
            target="_blank"
            className="icons-github"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://www.linkedin.com/in/keanu-ely-gilbert-manly-09022a1a4/"
            rel="noopener noreferrer"
            target="_blank"
            className="icons-linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <br />
        <section className="arrowdown">
          <AnchorLink href="#about" className="icons-arrowdown">
            <FontAwesomeIcon icon={faChevronCircleDown} />
          </AnchorLink>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Home;
