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
    <div className="group relative w-full overflow-hidden rounded-xl bg-[#111111] border border-white/5 transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-primary-accent/5">
      
      {/* 1. Image Section - Banner Style */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60" />
      </div>

      {/* 2. Content Section */}
      <div className="p-6 md:p-8">
        <h3 className="mb-3 font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
          {title}
        </h3>
        
        <p className="mb-6 text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* 3. Tech Tags */}
        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 4. Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2 border-t border-white/5">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
            >
              <FiGithub className="text-lg transition-transform group-hover/link:scale-110" /> 
              <span>Code</span>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
            >
              <FiExternalLink className="text-lg transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" /> 
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
