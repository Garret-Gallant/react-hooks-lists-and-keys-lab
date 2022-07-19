import React from "react";

function ProjectItem({ name, about, technologies }) {
  
const renderTech = (technologies) => technologies.map((technology) => (
    <span key={technology.id}> {technology} </span>
))
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTech(technologies)}
      </div>
    </div>
  );
}

export default ProjectItem;
