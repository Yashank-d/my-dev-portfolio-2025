import React from "react";
import Image from "next/image";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const HomeView = () => {
  return (
    <div className="relative h-full w-full p-6 md:p-12 lg:p-24 overflow-hidden rounded-2xl">
      <Image
        src="/moody-profile.jpg"
        alt="Yashank D"
        fill
        className="object-cover z-0 lg:ml-80"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      <div className="relative w-full h-full flex flex-col lg:flex-row lg:justify-between justify-center gap-3">
        <div className="relative z-10 flex flex-col justify-between lg:justify-center">
          <div>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[124px] font-bold text-white mb-2">
              Yashank D
            </h1>
            <h2 className="text-xl md:text-3xl text-gray-200">
              Front-end Developer <br />& Creative Coder
            </h2>
          </div>

          <div className="flex gap-4 md:gap-6 mt-12 lg:mt-8 flex-wrap">
            <a
              href="mailto:yashank.design@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:text-primary-accent transition-colors rounded-full border border-glass-border bg-nav-glass-bg px-5 py-2"
            >
              <FiMail /> yashank.design@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/yashankd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary-accent transition-colors rounded-full border border-glass-border bg-nav-glass-bg px-5 py-2"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/Yashank-d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-primary-accent transition-colors rounded-full border border-glass-border bg-nav-glass-bg px-5 py-2"
            >
              <FiGithub /> GitHub
            </a>
          </div>
        </div>

        <div className="max-w-xl flex flex-col z-20 text-left lg:text-right mt-12 lg:mt-auto lg:mb-auto lg:items-end">
          <p className="text-lg text-gray-200 leading-relaxed">
            I build with purpose and precision, turning complex problems into
            clean, &#34;invisible&#34; code and beautiful user experiences.
          </p>
          <div className="w-24 h-1 bg-primary-accent mt-6 mb-6 mx-0 lg:ml-auto" />
          <p className="text-lg md:text-xl text-primary-accent font-semibold">
            Great code should feel invisible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
