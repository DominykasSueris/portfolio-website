import React from "react";

interface ProjectsCardProps {
  id: number;
  title: string;
  description: string;
  background: string;
}

const ProjectsCard = ({
  id,
  title,
  description,
  background,
}: ProjectsCardProps) => {
  return (
    <div>
      <div
        className="h-52 md:h-72"
        style={{ background: `${background}` }}
      ></div>
      <div className="text-white">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
