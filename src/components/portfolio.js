import React from "react";
import "./css/portfolio.css";
import portfolioimage from "../image/portfolio1.svg";

function Portfolio() {
  return (
    <React.Fragment>
      <div className="portfolio" id="portfolio">
        <h3 className="title-about">Portfolio</h3>
        <span className="content-portfolio">Soon To Be Uploaded</span>
        <br />
        <img src={portfolioimage} className="img-portfolio" alt="portfolio" />
      </div>
    </React.Fragment>
  );
}

export default Portfolio;
