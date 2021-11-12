import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {
 
  const [projects] = useState([
    {
      name: 'passGenerator',
      description: 'Password Generator',
      link: "https://jb150524.github.io/passwordgen/",
      repo: "https://github.com/jb150524/passwordgen"
    },
    {
      name: 'E-Commerce',
      description: 'Ecommerce application',
      link: "https://github.com",
      repo: "https://github.com/jb150524/ORM-E-Commerce"
      
    },
    {
      name: 'MLB',
      description: 'React/JavaScript/CSS',
      link: "https://imartinez-tech.github.io/Group-1/",
      repo: "https://github.com/imartinez-tech/M.L.B.S-Project-"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
