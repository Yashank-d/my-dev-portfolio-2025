"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import GlassCard from "@/components/ui/GlassCard";
import BottomNav, { type View } from "@/components/layout/BottomNav";
import HomeView from "@/components/views/HomeView";
import SummaryView from "@/components/views/SummaryView";
import TimelineModal from "@/components/modals/TimelineModal";
import SkillsView from "@/components/views/SkillsView";
import ProjectsView from "@/components/views/ProjectsView";
import ContactView from "@/components/views/ContactView";
import TopNav from "@/components/layout/TopNav";
import BackgroundGlows from "@/components/layout/BackgroundGlows";
import Loader from "@/components/ui/Loader";

const experienceContent = (
  <div className="flex flex-col gap-6">
    <div>
      <h3 className="text-xl font-semibold text-white">
        Automation Test Engineer
      </h3>
      <p className="text-primary-accent">Dec 2021 - Sep 2024</p>
      <p className="text-gray-300">Tata Consultancy Services (TCS)</p>
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

type ModalContent = "experience" | "education" | null;

export default function Home() {
  const [activeView, setActiveView] = useState<View>("home");

  const [modalOpen, setModalOpen] = useState<ModalContent>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = (content: ModalContent) => setModalOpen(content);
  const closeModal = () => setModalOpen(null);

  const getModalContent = () => {
    switch (modalOpen) {
      case "experience":
        return { title: "Professional Experience", content: experienceContent };
      case "education":
        return { title: "Education & Skills", content: educationContent };
      default:
        return { title: "", content: null };
    }
  };

  const { title, content } = getModalContent();

  const renderView = () => {
    switch (activeView) {
      case "home":
        return <HomeView />;
      case "summary":
        return (
          <SummaryView
            onOpenExperience={() => openModal("experience")}
            onOpenEducation={() => openModal("education")}
          />
        );
      case "skills":
        return <SkillsView />;
      case "projects":
        return <ProjectsView />;
      case "contact":
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div key="loader">
          <Loader />
        </motion.div>
      ) : (
        
        <motion.main
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BackgroundGlows activeView={activeView} />

          <GlassCard className="flex flex-col">
            <TopNav activeView={activeView} setActiveView={setActiveView} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                className="flex-1 h-full w-full overflow-y-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>

            <BottomNav activeView={activeView} setActiveView={setActiveView} />
          </GlassCard>

          <AnimatePresence>
            {modalOpen && (
              <TimelineModal title={title} onClose={closeModal}>
                {content}
              </TimelineModal>
            )}
          </AnimatePresence>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
