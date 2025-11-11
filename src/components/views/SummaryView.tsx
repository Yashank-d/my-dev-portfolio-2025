import React from "react";

type Props = {
  onOpenExperience: () => void;
  onOpenEducation: () => void;
};

const SummaryView = ({ onOpenExperience, onOpenEducation }: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-12 text-center md:p-24">
      <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl">
        From Tester to Creator
      </h1>

      <p className="mb-10 max-w-3xl text-lg text-gray-300 md:text-xl">
        My journey started in QA, where I mastered the logic of breaking
        applications. Now, I use that same critical eye to build them—crafting
        pixel-perfect, resilient, and beautiful user experiences.
      </p>

      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <button
          onClick={onOpenExperience}
          className="
            rounded-full border border-glass-border bg-nav-glass-bg 
            py-3 px-6 text-lg text-white transition-all 
            hover:bg-white/20 hover:shadow-lg
          "
        >
          Professional Experience
        </button>
        <button
          onClick={onOpenEducation}
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
