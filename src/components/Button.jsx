import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import * as motion from "motion/react-client";

export const Button = ({ bLabel, onClick, currentStep, whileTap }) => {
  return (
    <motion.button
      onClick={onClick}
      className="w-[100%] h-[44px] bg-[#121316] rounded-[6px] text-white flex items-center justify-center"
    >
      {bLabel + " "}
      {currentStep + 1}/3
      <ChevronRight />
    </motion.button>
  );
};
export const BackButton = ({ bLabel, backClick }) => {
  return (
    <motion.button
      onClick={backClick}
      className="w-[30%] h-[44px] text-[#121316] rounded-[6px] border-[#CBD5E1] border-[1px] bg-white flex items-center justify-center"
    >
      <ChevronLeft />
      {bLabel}
    </motion.button>
  );
};
