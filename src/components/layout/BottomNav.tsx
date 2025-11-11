import React from "react";

export type View = "home" | "summary" | "skills" | "projects" | "contact";

type Props = {
  activeView: View;
  setActiveView: (view: View) => void;
};

const navItems: { id: View; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "summary", label: "Summary" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const BottomNav = ({ activeView, setActiveView }: Props) => {
  return (
    <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-nav-glass-bg backdrop-blur-md border border-glass-border rounded-full shadow-lg z-10 px-4 py-2">
      <ul className="flex items-center gap-2">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveView(item.id)}
              className={`rounded-full transition-colors px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm  ${
                activeView === item.id
                  ? "bg-primary-accent text-black font-semibold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
