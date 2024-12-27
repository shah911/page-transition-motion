import React from "react";
import { motion } from "motion/react";

const Transition = ({ children }) => {
  return (
    <div className="overflow-hidden bg-black">
      <motion.div
        initial={{
          clipPath: "inset(100% 0 0 0)",
          opacity: 0.3,
          rotate: 3,
          scale: 1.2,
        }}
        animate={{
          clipPath: "inset(0 0 0 0)",
          opacity: 1,
          rotate: 0,
          scale: 1,
          transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
        }}
        exit={{
          clipPath: "inset(0 0 100% 0)",
          opacity: 0.3,
          rotate: -3,
          scale: 1.2,
          transition: { duration: 1, ease: [0.65, 0, 0.35, 1] },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Transition;
