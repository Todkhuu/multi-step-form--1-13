import { Image } from "lucide-react";
import { ThirdStep } from "./ThirdStep";

export const ThirdMiddle = ({ onChange, error, imageUrl, name }) => {
  return (
    <div>
      <p className="text-[#334155] text-[14px] font-semibold mb-[8px]">
        Profile image
      </p>
      <label
        htmlFor="file-input"
        className=" w-[100%] h-[180px] bg-[#f8f8f8] flex flex-col items-center justify-center gap-2 overflow-hidden"
      >
        {imageUrl ? (
          <div className="relative flex ">
            <img
              className=" z-10 w-[100%] h-[100%] object-contain "
              src={imageUrl}
              alt=""
            />
            <button className="w-[10px] h-[10px] bg-black absolute right-1"></button>
          </div>
        ) : (
          <div>
            <div className=" w-7 h-7 bg-white rounded-full flex items-center justify-center ">
              <Image className="w-3 h-3 " />
            </div>
            <p className="  text-[#272729] text-[14px] font-medium">
              Add image
            </p>
          </div>
        )}

        <input
          hidden
          id="file-input"
          type="file"
          onChange={onChange}
          name={name}
        />
      </label>
      <p className="text-[14px] mt-2 text-red-600 ">{error} </p>
    </div>
  );
};
