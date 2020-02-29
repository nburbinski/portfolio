import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import resumeStyles from "./resume.module.scss"

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  return (
    <div className={resumeStyles.container}>
      <h1>Resume</h1>

      <a href={data.allFile.edges[0].node.publicURL}>Download</a>

      <embed
        src={data.allFile.edges[0].node.publicURL}
        type="application/pdf"
        width="100%"
        height="1000px"
      />
    </div>
  )
}

export default Resume
