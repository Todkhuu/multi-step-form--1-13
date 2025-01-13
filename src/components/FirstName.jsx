import { Input } from "./Input";

export const FirstName = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[480px] h-[655px] rounded-lg bg-white p-8 flex flex-col justify-between">
        <div>
          <div>
            <img src="/logo.png" alt="" />
            <h2 className="text-[#202124] text-[26px] font-semibold mt-2 ">
              Join Us! 😎
            </h2>
            <p className="text-[#8E8E8E] text-[18px] mt-2">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-[28px]">
            <Input
              label={"First name"}
              placeholder={"Your first name"}
              error={"First name cannot contain special characters or numbers."}
            />
            <Input
              label={"Last name"}
              placeholder={"Your last name"}
              error={"Last name cannot contain special characters or numbers."}
            />
            <Input
              label={"Username"}
              placeholder={"Your username"}
              error={
                "This username is already taken. Please choose another one."
              }
            />
          </div>
        </div>
        <button className="w-[416] h-[44px] bg-[#121316] rounded-[6px] text-white ">
          Continue
        </button>
      </div>
    </div>
  );
};
