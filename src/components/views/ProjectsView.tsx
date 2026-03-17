import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";

// 1. Your Project Data
const projects = [
  {
    title: "FocusFlow",
    description:
      "A comprehensive project management dashboard featuring task tracking, and client management. Built to streamline freelance workflows.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Prisma"],
    image: "/focusflow.jpg",
    liveLink: "https://focusflowproject.vercel.app/",
    repoLink: "https://github.com/Yashank-d/focusflow",
  },
  {
    title: "thesocialplug.",
    description:
      "Sole founder and engineer. Built a full-stack offline social community platform for Bengaluru — event booking, QR ticketing, waitlist management, admin dashboard, team RBAC, and email delivery via Gmail SMTP. Live in production.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "Prisma", "GSAP"],
    image: "/thesocialplug-preview.jpg",
    liveLink: "https://thesocialplug.vercel.app/events",
    repoLink: null,
    isPrivate: true,
  },
];

const ProjectsView = () => {
  return (
    <div className="flex w-full flex-col p-6 md:p-12 lg:p-24 pb-28 md:pb-32 lg:pb-32">
      <h1 className="mb-2 font-heading text-3xl font-bold md:text-5xl lg:text-6xl text-center">
        Selected Work
      </h1>
      <p className="mb-12 text-center text-lg text-gray-400">
        Projects that solve real problems.
      </p>

      {/* Project Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project} // This passes all the project data as props
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
