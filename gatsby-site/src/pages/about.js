import React from "react"

import StyleCss from "./about.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilRuler, faLaptopCode } from "@fortawesome/free-solid-svg-icons"

const AboutPage = () => (
  <React.Fragment>
    <div className={StyleCss.container} id="about">
      <div >
        <p className={StyleCss.title}>ABOUT</p>
        <div className={StyleCss.bar}></div>
        <br />
        <p className={StyleCss.content}>
          I'm a Web Developer in Philippines. Who love working on Creative Idea,
          Designing and Creating Intuitive, Fast, Dynamic, Responsive website
          into reality.
        </p>
      </div>

      <div className={StyleCss.divcontainer}>
        <div className={StyleCss.divskills}>
          <FontAwesomeIcon icon={faLaptopCode} className={StyleCss.icon} />
          <p className={StyleCss.contentheader}>Language Skills</p>
          <p className={StyleCss.contentparagraph}>
            Mostly I use technical skills.
          </p>
          <p>Front-End </p>
          <div className={StyleCss.skills}>
            <p className={StyleCss.paragraphs}>HTML5</p>
            <p className={StyleCss.paragraphs}>CSS3</p>
            <p className={StyleCss.paragraphs}>Javascript</p>
            <p className={StyleCss.paragraphs}>Node.js</p>
            <p className={StyleCss.paragraphs}>Jquery</p>
            <p className={StyleCss.paragraphs}>ReactJS</p>
            <p className={StyleCss.paragraphs}>Docker</p>
            <p className={StyleCss.paragraphs}>Postgre SQL</p>
          </div>
          <p>ReactJS UI Framework </p>
          <div className={StyleCss.skills}>
            <p className={StyleCss.paragraphs}>Material UI</p>
            <p className={StyleCss.paragraphs}>Ant Design</p>
          </div>
          <p>Back-End </p>
          <div className={StyleCss.skills}>
            <p className={StyleCss.paragraphs}>Python</p>
            <p className={StyleCss.paragraphs}>Django</p>
          </div>
        </div>

        <div className={StyleCss.divtools}>
          <FontAwesomeIcon icon={faPencilRuler} className={StyleCss.icon} />
          <p className={StyleCss.contentheader}>Tools</p>
          <p className={StyleCss.contentparagraph}>
            Mostly I use tools in Designing {"&"} coding.
          </p>
          <ul
            style={{
              listStyleType: "none",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <li>
              <p className={StyleCss.paragraphs}>Figma</p>
            </li>
            <li>
              <p className={StyleCss.paragraphs}>Visual Studio Code</p>
            </li>
            <li>
              <p className={StyleCss.paragraphs}>Github</p>
            </li>
            <li>
              <p className={StyleCss.paragraphs}>Adobe Photoshop</p>
            </li>
            <li>
              <p className={StyleCss.paragraphs}>CodeSandbox</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default AboutPage
