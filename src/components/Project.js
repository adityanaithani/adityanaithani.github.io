import React from 'react'
import {useNavigate} from 'react-router-dom'

function Project({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div 
      className="project"
      onClick={() => {
        navigate("/projects/" + id)
      }}
    >
        <div style={{backgroundImage: `url(${image})`}} className="bgImg"/>
        <h1> {name} </h1>
    </div>
  )
}

export default Project