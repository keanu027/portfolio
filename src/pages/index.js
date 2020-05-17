import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import StyleCss from "./index.module.scss"

import PortfolioPage from "./portfolio"
import AboutPage from "./about"
import ContactPage from "./contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={StyleCss.container} id="home" >
      <p className={StyleCss.slogan}>Hi, I'm Ely. Nice to meet you</p>
      <p className={StyleCss.web}>Web Developer </p>
      <a
        href="https://github.com/keanu027"
        target="_blank"
        className={StyleCss.icon}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://www.linkedin.com/in/keanu-ely-gilbert-manly-09022a1a4/"
        target="_blank"
        className={StyleCss.icon}
      >
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
    </div>
    <AboutPage />
    <PortfolioPage />
    <ContactPage />
    <footer
      style={{
        margin: `0 auto`,
        textAlign: "center",
        fontSize: "18px",
        background:'#27343F',padding:'1%'
      }}
    >
      <p style={{ color: "#fff", fontWeight: 550,textAlign:'center',marginTop:'1.5%' }}>
        {" "}
        © Ely {new Date().getFullYear()}
      </p>
    </footer>
  </Layout>
)

export default IndexPage
