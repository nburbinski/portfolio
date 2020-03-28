import { Link } from "gatsby"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFileAlt,
  faHome,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import headerStyles from "./header.module.scss"

const Header = () => (
  <header>
    <div className={headerStyles.header}>
      <div className={headerStyles.titleBox}>
        <h1>
          <Link className={headerStyles.title} to="/">
            Nicolas Burbinski
          </Link>
        </h1>
        <p className={headerStyles.subTitle}>Full Stack Developer</p>
      </div>

      <ul className={headerStyles.navList}>
        <li>
          <div className={headerStyles.navItemTitle}>Home</div>
          <Link className={headerStyles.navItem} to="/">
            <FontAwesomeIcon
              className={headerStyles.headerLink}
              icon={faHome}
              size="3x"
            />
          </Link>
        </li>
        <li>
          <p className={headerStyles.navItemTitle}>Resume</p>
          <Link className={headerStyles.navItem} to="/resume">
            <FontAwesomeIcon
              className={headerStyles.headerLink}
              icon={faFileAlt}
              size="3x"
            />
          </Link>
        </li>
        <li>
          <a
            className={headerStyles.navItem}
            href="https://linkedin.com/in/nburbinski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={headerStyles.headerLink}
              icon={faLinkedin}
              size="3x"
            />
          </a>
        </li>
        <li>
          <a
            className={headerStyles.navItem}
            href="https://github.com/nburbinski"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={headerStyles.headerLink}
              icon={faGithub}
              size="3x"
            />
          </a>
        </li>
        <li>
          <Link className={headerStyles.navItem} to="/contact">
            <FontAwesomeIcon
              className={headerStyles.headerLink}
              icon={faAddressBook}
              size="3x"
            />
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
