import PropTypes from "prop-types"
import React, { useState } from "react"
import StyleCss from "./header.module.scss"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => {
  const [mobile, setmobile] = useState(false)
  console.log(mobile)
  return (
    <>
      <header className={StyleCss.header} id="navbar">
        <AnchorLink to="/#home" className={StyleCss.link}>
          HOME
        </AnchorLink>

        <AnchorLink to="/#about" className={StyleCss.link}>
          ABOUT
        </AnchorLink>

        <AnchorLink
          to="/#portfolio"
          className={StyleCss.link}
          title="portfolio"
        >
          PORTFOLIO
        </AnchorLink>

        <AnchorLink to="/#contact" className={StyleCss.link}>
          CONTACT
        </AnchorLink>

        <a className={StyleCss.menu}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => {
              setmobile(!mobile)
            }}
          />
        </a>
        <div
          className={StyleCss.mobilemode}
          onClick={() => {
            setmobile(!mobile)
          }}
        >
          <AnchorLink
            to="/#home"
            className={mobile ? StyleCss.mobilelink : StyleCss.link}
          >
            HOME
          </AnchorLink>

          <AnchorLink
            to="/#about"
            className={mobile ? StyleCss.mobilelink : StyleCss.link}
            onClick={() => {
              setmobile(!mobile)
            }}
          >
            ABOUT
          </AnchorLink>

          <AnchorLink
            to="/#portfolio"
            className={mobile ? StyleCss.mobilelink : StyleCss.link}
            onClick={() => {
              setmobile(!mobile)
            }}
            title="portfolio"
          >
            PORTFOLIO
          </AnchorLink>

          <AnchorLink
            to="/#contact"
            className={mobile ? StyleCss.mobilelink : StyleCss.link}
            onClick={() => {
              setmobile(!mobile)
            }}
          >
            CONTACT
          </AnchorLink>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
