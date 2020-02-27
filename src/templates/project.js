import React from "react"
import Layout from "../components/layout"

import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        Title
        Description
      }
      html
    }
  }
`
const Project = props => {
  return (
    <Layout>
      <div>
        <h1>{props.data.markdownRemark.frontmatter.Title}</h1>
        <p>{props.data.markdownRemark.frontmatter.Description}</p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default Project
