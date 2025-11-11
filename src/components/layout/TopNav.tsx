import React from "react";
import { type View } from "./BottomNav";

type Props = {
  activeView: View;
  setActiveView: (view: View) => void;
};

const TopNav = ({ activeView, setActiveView }: Props) => {
  return (
    <nav className="w-full flex justify-between items-center p-6 md:py-4 md:px-25 z-30">
      <div className="font-heading text-xl md:text-2xl font-bold">
        {activeView === "home" ? (
          <span>&lt;/&gt;</span>
        ) : (
          <button onClick={() => setActiveView("home")}>Yashank D</button>
        )}
      </div>
      <a
        href="/yashank-d-resume.pdf"
        download="yashank-d-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-primary-accent py-2 px-5 text-base font-semibold text-black transition-all hover:brightness-110"
      >
        Download CV
      </a>
    </nav>
  );
};

export default TopNav;
