import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandPrisma,
  TbBrandSupabase,
  TbBrandVscode,
  TbBrandFramerMotion,
} from "react-icons/tb";
import { SiGooglegemini } from "react-icons/si";

const skillCategories = [
  {
    title: "Core Technologies",
    skills: [
      { name: "HTML", icon: <FaHtml5 size={16} /> },
      { name: "CSS", icon: <FaCss3Alt size={16} /> },
      { name: "JavaScript", icon: <IoLogoJavascript size={16} /> },
      { name: "TypeScript", icon: <TbBrandTypescript size={16} /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact size={16} /> },
      { name: "Next.js", icon: <TbBrandNextjs size={16} /> },
      { name: "Motion", icon: <TbBrandFramerMotion size={16} /> },
    ],
  },
  {
    title: "Styling",
    skills: [{ name: "Tailwind CSS", icon: <TbBrandTailwind size={16} /> }],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Prisma", icon: <TbBrandPrisma size={16} /> },
      { name: "Supabase", icon: <TbBrandSupabase size={16} /> },
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      { name: "Git", icon: <FaGitAlt size={16} /> },
      { name: "GitHub", icon: <FaGithub size={16} /> },
      { name: "VS Code", icon: <TbBrandVscode size={16} /> },
      { name: "Google Gemini", icon: <SiGooglegemini size={16} /> },
    ],
  },
];

const SkillsView = () => {
  return (
    <div className="w-full flex-col p-6 md:p-12 lg:p-24">
      <h1 className="mb-6 font-heading text-3xl font-bold md:text-5xl lg:text-6xl">
        My Toolkit
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h2 className="mb-3 font-heading text-lg font-semibold text-primary-accent md:text-xl">
              {category.title}
            </h2>

            <div className="flex flex-wrap gap-3 lg:gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    flex items-center gap-2
                    rounded-full border border-glass-border 
                    bg-nav-glass-bg px-3 lg:px-6 py-1.5 lg:py-3 
                    text-sm lg:text-lg text-gray-200 cursor-default
                  "
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsView;
