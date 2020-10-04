import React, { useState } from "react";
import "./css/header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [navbaractive, setnavbaractive] = useState(false);
  const [showbar, setshowbar] = useState(false);

  const Navbarbgcolorchanger = () => {
    if (window.scrollY >= 1) {
      if (showbar === true) {
        setnavbaractive(true);
      }
      setnavbaractive(true);
    } else {
      if (showbar === true) {
        setnavbaractive(true);
      } else {
        setnavbaractive(false);
      }
    }
  };

  window.addEventListener("scroll", Navbarbgcolorchanger);

  return (
    <React.Fragment>
      <header className={navbaractive ? "menubar active" : "menubar"}>
        <nav>
          <ul className="navlist">
            <li className="navlist_item">
              <AnchorLink href="#home" className="nav_link">
                HOME
              </AnchorLink>
            </li>
            <li className="navlist_item">
              <AnchorLink href="#about" className="nav_link">
                ABOUT
              </AnchorLink>
            </li>
            <li className="navlist_item">
              <AnchorLink href="#portfolio" className="nav_link">
                PORTFOLIO
              </AnchorLink>
            </li>
          </ul>
          <a href="/" target="#" className="menu">
            <FontAwesomeIcon
              icon={faBars}
              onClick={(event) => {
                event.preventDefault();
                setshowbar(!showbar);
                setnavbaractive(true);
              }}
            />
          </a>
        </nav>
        <header
          className={navbaractive ? "showmenubar active" : "showmenubar"}
          style={{
            display: showbar ? "inline-block" : "none",
          }}
        >
          <nav>
            <ul className="mobilenavlist">
              <li className="mobilenavlist_item">
                <AnchorLink
                  href="#home"
                  className="mobilenav_link"
                  onClick={() => {
                    setshowbar(false);
                  }}
                >
                  HOME
                </AnchorLink>
              </li>
              <li className="mobilenavlist_item">
                <AnchorLink
                  href="#about"
                  className="mobilenav_link"
                  onClick={() => {
                    setshowbar(false);
                  }}
                >
                  ABOUT
                </AnchorLink>
              </li>
              <li className="mobilenavlist_item">
                <AnchorLink
                  href="#portfolio"
                  className="mobilenav_link"
                  onClick={() => {
                    setshowbar(false);
                  }}
                >
                  PORTFOLIO
                </AnchorLink>
              </li>
            </ul>
          </nav>
        </header>
      </header>
    </React.Fragment>
  );
}

export default Header;
