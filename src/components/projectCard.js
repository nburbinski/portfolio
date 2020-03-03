import React from "react"

import projectCardStyles from "./projectCard.module.scss"

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className={projectCardStyles.projectCard} id={project.Title}>
        <h1>{project.Title}</h1>
        <div>{project.Description}</div>
        <div className={projectCardStyles.techandlinks}>
          <h3> Tech Used </h3>
          <ul>
            {project.Tech.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className={projectCardStyles.links}>
            <a
              href={project.Demo}
              target="_blank"
              rel="noopener noreferrer"
              className={projectCardStyles.linkDemo}
            >
              Demo
            </a>
            <a
              href={project.Repo}
              target="_blank"
              rel="noopener noreferrer"
              className={projectCardStyles.linkRepo}
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
