import React from "react";
import Navbar from "../componets/Navbar";
import ProjectsCard from "../componets/ProjectsCard";

const projectsDataTest = [
  {
    id: 1,
    title: "React",
    description: "react",
    background: "black",
  },
  {
    id: 2,
    title: "Node",
    description: "node",
    background: "red",
  },
  {
    id: 3,
    title: "Type-Script",
    description: "Type",
    background: "blue",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1> My Projects</h1>
        <div>
          {projectsDataTest.map((project) => (
            <ProjectsCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              background={project.background}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
