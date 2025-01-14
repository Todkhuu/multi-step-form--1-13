import { Image } from "lucide-react";

export const ThirdMiddle = ({ onChange, error }) => {
  return (
    <div>
      <label
        htmlFor="file"
        className="text-[#334155] text-[14px] font-semibold mb-[8px]"
      >
        Profile image
      </label>
      <div className="w-[100%] h-[180px] bg-[#f8f8f8] flex flex-col items-center justify-center gap-2 ">
        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
          <Image className="w-3 h-3" />
        </div>
        <p className="text-[#272729] text-[14px] font-medium">Add image</p>
      </div>
      <input type="file" onChange={onChange} name="file" />
      <p className="text-[14px] mt-2 text-red-600 ">{error} </p>
    </div>
  );
};
