import { ChevronRight } from "lucide-react";

export const Button = ({ bLabel, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[100%] h-[44px] bg-[#121316] rounded-[6px] text-white flex items-center justify-center"
    >
      {bLabel}
      <ChevronRight />
    </button>
  );
};
