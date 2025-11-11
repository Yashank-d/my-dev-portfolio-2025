import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const GlassCard = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`bg-glass-bg backdrop-blur-lg rounded-2xl border border-glass-border shadow-lg w-[98vw] h-[96vh] relative ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
