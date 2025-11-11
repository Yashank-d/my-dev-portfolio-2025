"use client";
import React from "react";
import { type View } from "./BottomNav";

type Props = {
  activeView: View;
};

const BackgroundGlows = ({ activeView }: Props) => {
  return (
    <div className="glow-container">
      <div className={`glow-element glow-${activeView}`} />
    </div>
  );
};

export default BackgroundGlows;
