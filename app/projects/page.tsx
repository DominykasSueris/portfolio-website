import React from "react";
import Navbar from "../componets/Navbar";
import ProjectsCard from "../componets/ProjectsCard";

const projectsDataTest = [
  {
    id: 1,
    title: "Colors app",
    image: "/images/Color_app.jpg",
    link: "https://github.com/DominykasSueris/colors_app",
  },
  {
    id: 2,
    title: "Infinite Scroll",
    image: "/images/Infinity_scroll.jpg",
    link: "https://github.com/DominykasSueris/infinite_scroll",
  },
  {
    id: 3,
    title: "Party list",
    image: "/images/Party_list.jpg",
    link: "https://github.com/DominykasSueris/party_list",
  },
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <h1 className="flex justify-center lg:text-4xl text-base lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:top-1/4 my-6">
        My Projects
      </h1>
      <div className="flex h-full lg:items-center justify-center lg:mt-0 mt-12">
        <div className="flex lg:flex-row flex-col">
          {projectsDataTest.map((project) => (
            <ProjectsCard
              key={project.id}
              id={project.id}
              title={project.title}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
