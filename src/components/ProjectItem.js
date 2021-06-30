import React from "react";

function ProjectItem({ name, about, technologies }) {
  // let techList = technologies.map(tech => <span>{tech}</span>)
  // console.log(techList)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((tech, index) => <span key={index}>{tech}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
