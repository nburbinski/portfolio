import ProjectCard from "./projectCard"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import projectStyles from "./projects.module.scss"

const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                Title
                Description
              }
              html
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  const projects = [
    {
      Title: "Plant Trackr",
      Description:
        "A solution to the impossible and relatable task of managing dozens of household plants, Plant Trackr allows you to keep track of all of your plants needs to stay happy and healthy.",
      Tech: [
        "MongoDB",
        "Mongoose",
        "Express",
        "ReactJS",
        "NodeJS",
        "jwt",
        "REST API",
      ],
      Demo: "http://plantcity.herokuapp.com/",
      Repo: "https://github.com/nburbinski/plant_city",
      img: "",
    },
    {
      Title: "UCF Movie Night",
      Description:
        "As a resolution to the daunting task of picking a movie for movie night, I created a web app that allows you to search and store movies. You can then select a movie at random to watch",
      Tech: [
        "MongoDB",
        "Mongoose",
        "Express",
        "ReactJS",
        "NodeJS",
        "Bootstrap",
        "GraphQL",
      ],
      Demo: "https://ucfmovietime.herokuapp.com/",
      Repo: "https://github.com/nburbinski/ucf_movie_time",
    },
    {
      Title: "Grocery Time",
      Description:
        "Picking groceries can be difficult, especially when trying to meal prep. Grocery Time is a web app compiles your groceries whether individually or by recipe and gives you nutritional data through the Spoonacular API",
      Tech: ["PostgreSQL", "Express", "ReactJS", "NodeJS", "SASS"],
      Demo: "",
      Repo: "",
    },
    {
      Title: "Portfolio",
      Description: "Portfolio",
      Tech: ["ReactJS", "GatsbyJS", "SASS"],
      Demo: "",
      Repo: "",
    },
  ]

  return (
    <div className={projectStyles.projectsContainer}>
      {projects.map(project => {
        return <ProjectCard key={project.Title} project={project} />
      })}
    </div>
  )
}

export default Projects
