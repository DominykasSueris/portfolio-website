import Link from "next/link";
import React from "react";

interface ProjectsCardProps {
  id: number;
  title: string;
  background: string;
  link: string;
}

const ProjectsCard = ({ id, title, background, link }: ProjectsCardProps) => {
  return (
    <div className="group mx-12 relative">
      <div
        className="xl:h-52 lg:48 md:h-60 h-32 xl:w-80 lg:w-60 w-52 my-2"
        style={{ background: `${background}` }}
      ></div>
      <div className="flex flex-col justify-center text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h5 className="flex justify-center hidden group-hover:block lg:text-base text-sm">
          {title}
        </h5>
        <Link href={link}>
          <svg
            className="flex justify-center lg:h-12 h-6 w-full text-black hidden group-hover:block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
