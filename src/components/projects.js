import ProjectCard from "./projectCard"
import React from "react"
import { Link } from "gatsby"

import projectStyles from "./projects.module.scss"
import { projects } from "../projects"

const Projects = () => {
  return (
    <div className={projectStyles.projectsContainer}>
      <div className={projectStyles.title}>
        <h2> Projects </h2>
        <ol>
          {projects.map(project => (
            <li key={project.Title}>
              <Link to={`/#${project.Title}`}>{project.Title}</Link>
            </li>
          ))}
        </ol>
      </div>
      <div className={projectStyles.projects}>
        {projects.map(project => {
          return (
            <ProjectCard
              id={project.Title}
              key={project.Title}
              project={project}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
