"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";

export default function ExitAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col w-[100px] h-[160px] realtive">
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="w-[100px] h-[100px] bg-[#0cdcf7] rounded-[10px]"
            key="box"
          />
        ) : null}
      </AnimatePresence>
      <motion.button
        className="bg-[#0cdcf7] rounded-[10px] py-[10px] px-[20px] text-[#0f1115] absolute right-0 left-0 bottom-0"
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
}
