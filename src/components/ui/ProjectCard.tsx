import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveLink?: string;
  repoLink?: string;
};

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  liveLink,
  repoLink,
}: ProjectProps) => {
  return (
    <div
      className="
        group relative flex flex-col overflow-hidden rounded-2xl 
        border border-glass-border bg-nav-glass-bg transition-all 
        hover:border-white/10 hover:bg-white/5
      "
    >
      {/* 1. Project Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
      </div>

      {/* 2. Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-heading text-2xl font-bold text-white">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-base text-gray-300">{description}</p>

        {/* 3. Tech Stack Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 4. Links */}
        <div className="flex gap-4">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <FiGithub size={18} /> Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <FiExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
