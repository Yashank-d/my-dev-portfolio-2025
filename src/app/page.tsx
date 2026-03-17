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

// experienceContent and educationContent moved to SummaryView.tsx
// ModalContent logic inverted to handle title and content directly

export default function Home() {
  const [activeView, setActiveView] = useState<View>("home");

  const [modalData, setModalData] = useState<{ title: string; content: React.ReactNode } | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      Promise.race([
        document.fonts.ready,
        new Promise((resolve) => setTimeout(resolve, 800))
      ]).then(() => {
        // Ensure loader runs for at least 600ms if fonts load instantly
        setTimeout(() => setIsLoading(false), Math.max(0, 600));
      });
    } else {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const openModal = (title: string, content: React.ReactNode) => setModalData({ title, content });
  const closeModal = () => setModalData(null);

  // getModalContent removed since components pass content and title directly

  const renderView = () => {
    switch (activeView) {
      case "home":
        return <HomeView />;
      case "summary":
        return (
          <SummaryView
            onOpenExperience={(content, title) => openModal(title, content)}
            onOpenEducation={(content, title) => openModal(title, content)}
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
            {modalData && (
              <TimelineModal title={modalData.title} onClose={closeModal}>
                {modalData.content}
              </TimelineModal>
            )}
          </AnimatePresence>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
