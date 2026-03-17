import React from "react";

type Props = {
  onOpenExperience: (content: React.ReactNode, title: string) => void;
  onOpenEducation: (content: React.ReactNode, title: string) => void;
};

const experienceContent = (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-xl font-semibold text-white">
        Software Engineer – Automation & Quality
      </h3>
      <p className="text-primary-accent">Dec 2021 - Sep 2024</p>
      <p className="text-gray-300">Tata Consultancy Services (TCS) &middot; Client: LSEG</p>
      <p className="mt-2 text-gray-400">
        Engineered automation scripts and frameworks, ensuring software quality.
        My eye for detail helped catch critical bugs before they reached users.
      </p>
    </div>
  </div>
);

const educationContent = (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-xl font-semibold text-white">
        B.E. Mechanical Engineering
      </h3>
      <p className="text-primary-accent">Completed 2021</p>
      <p className="text-gray-300">East West Institute of Technology</p>
      <p className="mt-2 text-gray-400">
        Graduated with a strong foundation in problem-solving and systems logic.
      </p>
    </div>
  </div>
);

const SummaryView = ({ onOpenExperience, onOpenEducation }: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-12 text-center md:p-24 pb-32 md:pb-32 lg:pb-32">
      <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl">
        From Tester to Creator
      </h1>

      <p className="mb-10 max-w-3xl text-lg text-gray-300 md:text-xl">
        My journey started in QA, where I mastered the logic of breaking
        applications. Now, I use that same critical eye to build them crafting
        pixel-perfect, resilient, and beautiful user experiences.
      </p>

      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <button
          onClick={() => onOpenExperience(experienceContent, "Professional Experience")}
          className="
            rounded-full border border-glass-border bg-nav-glass-bg 
            py-3 px-6 text-lg text-white transition-all 
            hover:bg-white/20 hover:shadow-lg
          "
        >
          Professional Experience
        </button>
        <button
          onClick={() => onOpenEducation(educationContent, "Education & Skills")}
          className="
            rounded-full border border-glass-border bg-nav-glass-bg 
            py-3 px-6 text-lg text-white transition-all 
            hover:bg-white/20 hover:shadow-lg
          "
        >
          Education & Skills
        </button>
      </div>
    </div>
  );
};

export default SummaryView;
