import React from "react";

const ProjectsView = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-12 text-center md:p-24">
      <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl">
        Projects
      </h1>

      <p className="max-w-3xl text-lg text-gray-300 md:text-xl">
        New work is coming soon...
      </p>

      <p className="mt-4 max-w-3xl text-lg text-primary-accent md:text-xl">
        (Currently building &quot;FocusFlow&quot;!)
      </p>
    </div>
  );
};

export default ProjectsView;
