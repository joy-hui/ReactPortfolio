import React from "react";
import Project from "../Project";
import projects from "../../projects.json";
import "../../style.css";
import project1image from "../../images/project1image.png";
import project2image from "../../images/project2image.png";
import project3image from "../../images/project3image.png";
import project4image from "../../images/project4image.png";
import project5image from "../../images/project5image.png";
import project6image from "../../images/project6image.png";

function ProjectGallery() {
  return (
    <div>
      <h1 className="title">Projects List</h1>
      <Project
        title={projects[0].title}
        image={project1image}
        github={projects[0].github}
        deployed={projects[0].deployed}
        description={projects[0].description}
      />
      <Project
        title={projects[1].title}
        image={project2image}
        github={projects[1].github}
        deployed={projects[1].deployed}
        description={projects[1].description}
      />
      <Project
        title={projects[2].title}
        image={project3image}
        github={projects[2].github}
        deployed={projects[2].deployed}
        description={projects[2].description}
      />
      <Project
        title={projects[3].title}
        image={project4image}
        github={projects[3].github}
        deployed={projects[3].deployed}
        description={projects[3].description}
      />
      <Project
        title={projects[4].title}
        image={project5image}
        github={projects[4].github}
        deployed={projects[4].deployed}
        description={projects[4].description}
      />
      <Project
        title={projects[5].title}
        image={project6image}
        github={projects[5].github}
        deployed={projects[5].deployed}
        description={projects[5].description}
      />
    </div>
  );
}

export default ProjectGallery;
