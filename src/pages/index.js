import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Projects</h1>
    <div>
      <Projects />
    </div>
  </Layout>
)

export default IndexPage
