import React from "react"
import StyleCss from "./portfolio.module.scss"
import PortfolioImg from "../images/portfolio.png"
import WorldMapImg from "../images/worldmap.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const PortfolioPage = () => (
  <>
    <div style={{ background: "#fff", maxWidth: "100%" }}>
      <div className={StyleCss.container} id="portfolio">
        <p className={StyleCss.title}>PORTFOLIO</p>
        <div className={StyleCss.bar}></div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div className={StyleCss.image_containter}>
            <img
              src={PortfolioImg}
              alt="portfolio image"
              className={StyleCss.image}
            />
            <p className={StyleCss.content}>
              My Portfolio is a website promoting individual works craft or
              achievements. Built with Gatsbyjs.
            </p>
            <div className={StyleCss.middle}>
              <p style={{ fontWeight: 550, fontSize: "20px" }}>MY PORTFOLIO</p>
              {/* <a
              href="https://github.com/keanu027/portfolio"
              target="_blank"
              className={StyleCss.icon}
            >
              <FontAwesomeIcon icon={faGithubSquare} />
              <span className={StyleCss.tooltiptext}>Visit Github</span>
            </a> */}
              <AnchorLink to="/#home" className={StyleCss.icon}>
                <FontAwesomeIcon icon={faGlobe} />
                <span className={StyleCss.tooltiptext}>Visit Website</span>
              </AnchorLink>
              {/* <a href="/" target="_blank" className={StyleCss.icon}></a> */}

              {/* <a href="#">
              <p className={StyleCss.text}>Learn More</p>
            </a> */}
            </div>
          </div>

          <div className={StyleCss.image_containter}>
            <img
              src={WorldMapImg}
              alt="World Map image"
              className={StyleCss.image}
            />
            <p className={StyleCss.content}>
              Simple World Map App inspired by CNN News Map used in COVID-19
              Mapping. Built with ReactJS {"&"} Leaflet.
            </p>
            <div className={StyleCss.middle}>
              <p style={{ fontWeight: 550, fontSize: "20px" }}>World Map App</p>
              {/* <a
              href="https://github.com/keanu027/portfolio"
              target="_blank"
              className={StyleCss.icon}
            >
              <FontAwesomeIcon icon={faGithubSquare} />
              <span className={StyleCss.tooltiptext}>Visit Github</span>
            </a> */}
              <a
                href={"https://jovial-lewin-4dcb51.netlify.app/"}
                target="_blank"
                className={StyleCss.icon}
              >
                <FontAwesomeIcon icon={faGlobe} />
                <span className={StyleCss.tooltiptext}>Visit Website</span>
              </a>

              {/* <a href="#">
              <p className={StyleCss.text}>Learn More</p>
            </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default PortfolioPage
