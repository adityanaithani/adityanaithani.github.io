import React from 'react'
import Project from '../components/Project'
import {ProjectList} from '../helpers/ProjectList'
import '../styles/Projects.css'

function Projects() {
  return (
    <div className="projects">
      <h1>projects.</h1>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (
          <Project id={index} name={project.name} image={project.image}/>
          )
        })}
      </div>
    </div>
  )
}

export default Projects