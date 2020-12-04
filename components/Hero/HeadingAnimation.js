import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const ANIMATION_DURATION_S = 0.8;

const getVariants = (direction) => ({
  initial: {
    y: direction === "top" ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: ANIMATION_DURATION_S, ease: "easeInOut" },
  },
});

function HeadingAnimation({ text }) {
  return (
    <span className="relative flex flex-column content-center justify-center place-content-center mt-2 h-16 md:h-20">
    <AnimatePresence>
      <motion.div className="absolute bg-clip-text text-transparent pr-1 bg-gradient-to-r from-indigo-400 to-indigo-700"
        key={text}
        variants={getVariants("bottom")}
        initial={"initial"}
        exit={"initial"}
        animate={"animate"}>
        {text}
      </motion.div>
    </AnimatePresence>
    </span>
  )
}

export default HeadingAnimation
