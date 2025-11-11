import React from "react";
import { motion, spring } from "motion/react";
import { FiX } from "react-icons/fi";

type Props = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const TimelineModal = ({ title, onClose, children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: spring, stiffness: 300, damping: 20 }}
        className="relative w-[90vw] max-w-2xl rounded-2xl border border-glass-border bg-black/60 backdrop-blur-3xl p-8 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4">
          <h2 className="font-heading text-3xl text-white">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 transition-all hover:bg-white/20 hover:text-white "
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto pr-2 text-left">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineModal;
