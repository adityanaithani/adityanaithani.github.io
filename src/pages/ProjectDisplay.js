import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
      <div className="projectPage">
          <h1>{project.name}</h1>
          <img src={project.image} alt={project.name}/>
          <p>
              <h2><b>Skills:</b> {project.skills}</h2>
              <h3>{project.description}</h3>
          </p>
          <GitHubIcon />
      </div>
    )
}

export default ProjectDisplay