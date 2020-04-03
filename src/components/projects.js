import ProjectCard from "./projectCard"
import React from "react"
import { Link } from "gatsby"

import projectStyles from "./projects.module.scss"

const Projects = () => {
  const projects = [
    {
      Title: "Animal Shelter App",
      Description:
        "A mobile app that provides the user with pet information from their local animal shelter. Users can create an account for their local shelter and add animals to a public list. ",
      Tech: ["React Native", "Redux", "ReactJS", "Firebase"],
      Demo: "https://expo.io/@nburbinski/animal_shelter",
      Repo: "https://github.com/nburbinski/animal_shelter_rn",
      imgs: [],
    },
    {
      Title: "Plant Trackr",
      Description:
        "A solution to the impossible and relatable task of managing dozens of household plants, Plant Trackr allows you to keep track of all of your plants needs to stay happy and healthy. Login: Username: Demo User PW: Demo",
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
      imgs: "react-icon.png",
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
      imgs: [],
    },
    {
      Title: "Grocery Time*",
      Description:
        "Picking groceries can be difficult, especially when trying to meal prep. Grocery Time is a web app compiles your groceries whether individually or by recipe and gives you nutritional data through the Spoonacular API",
      Tech: ["PostgreSQL", "Express", "ReactJS", "NodeJS", "SASS", "Redux"],
      Demo: "",
      Repo: "https://github.com/nburbinski/grocerytime",
      imgs: [],
    },
    {
      Title: "Portfolio",
      Description:
        "A portfolio site to demonstrate my latest projects, as well as my resume, and a contact form.",
      Tech: ["ReactJS", "GatsbyJS", "SASS"],
      Demo: "",
      Repo: "https://github.com/nburbinski/portfolio",
      imgs: [],
    },
  ]

  return (
    <div className={projectStyles.projectsContainer}>
      <div className={projectStyles.title}>
        <h2> Projects </h2>
        <ol>
          <li>
            <Link to="/#Animal Shelter App">Animal Shelter App</Link>
          </li>

          <li>
            <Link to="/#Plant Trackr">Plant Trackr</Link>
          </li>
          <li>
            <Link to="/#UCF Movie Night">UCF Movie Night</Link>
          </li>

          <li>
            <Link to="/#Grocery Time">Grocery Time</Link>
          </li>
          <li>
            <Link to="/#Portfolio">Portfolio</Link>
          </li>
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
