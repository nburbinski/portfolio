import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>
        <main>{children}</main>
      </div>
      <footer>© {new Date().getFullYear()} Nicolas Burbinski</footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
