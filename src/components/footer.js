import React from "react";
import "./css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer" id="footer">
        <div className="icons-footer">
          <a
            href="https://github.com/keanu027"
            rel="noopener noreferrer"
            target="_blank"
            className="icons-github-footer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://www.linkedin.com/in/keanu-ely-gilbert-manly-09022a1a4/"
            rel="noopener noreferrer"
            target="_blank"
            className="icons-linkedin-footer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:manlykeanu@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="icons-gmail-footer"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
