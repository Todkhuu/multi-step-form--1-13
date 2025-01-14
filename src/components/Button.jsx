import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

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
export const BackButton = ({
  bLabel,
  back,
}) => {
  return (
    <button
      onClick={back}
      className="w-[30%] h-[44px] text-[#121316] rounded-[6px] border-[#CBD5E1] border-[1px] bg-white flex items-center justify-center"
    >
      <ChevronLeft />
      {bLabel}
    </button>
  );
};
