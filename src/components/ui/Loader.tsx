import React from "react";
import { motion } from "motion/react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black">
      <div
        className="
          relative w-[95vw] h-[90vh] 
          rounded-2xl border border-glass-border 
          bg-nav-glass-bg opacity-50 
          overflow-hidden 
          flex flex-col justify-center items-center {/* Added flex for centering */}
        "
      >
        <div className="absolute top-0 w-full flex justify-between items-center p-8 md:p-12">
          <div className="w-24 h-8 bg-white/10 rounded-full" />
          <div className="w-32 h-10 bg-white/10 rounded-full" />
        </div>

        <motion.div
          className="font-heading text-5xl font-bold text-white/30" 
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          &lt;/&gt;
        </motion.div>

        <div
          className="
            absolute bottom-6 left-1/2 -translate-x-1/2 
            w-80 h-12 bg-white/10 rounded-full
          "
        />

        <motion.div
          className="
            absolute top-0 left-0 h-full w-full 
            bg-linear-to-r from-transparent via-white/10 to-transparent
          "
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;
