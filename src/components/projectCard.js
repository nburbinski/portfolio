import React from "react"
import { Link } from "gatsby"

import projectCardStyles from "./projectCard.module.scss"

const ProjectCard = ({ project }) => {
  return (
    <div className={projectCardStyles.projectCard}>
      <div className={projectCardStyles.front}>
        <h1>{project.Title}</h1>
      </div>
      <div className={projectCardStyles.back}>
        <div className={projectCardStyles.links}>
          <a
            href={project.Demo}
            target="_blank"
            rel="noopener noreferrer"
            className={projectCardStyles.link}
          >
            Demo
          </a>
          <a
            href={project.Repo}
            target="_blank"
            rel="noopener noreferrer"
            className={projectCardStyles.link}
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
