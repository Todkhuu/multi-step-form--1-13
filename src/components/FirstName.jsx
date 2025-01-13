
export const FirstName = () => {
  const names = ["First name", "Last name", "Username"];
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
            {names.map((name) => (
              <div className="flex flex-col gap-2">
                <p className="text-[#334155] text-[14px] font-semibold ">
                  {name}
                </p>
                <input
                  className="border-[#334155] border-[1px] rounded-lg outline-none w-[416px] h-[40px] text-base p-3 active:border-[#0CA5e9]"
                  type="text"
                  placeholder="Placeholder"
                />
              </div>
            ))}
          </div>
        </div>
        <button className="w-[416] h-[44px] bg-[#121316] rounded-[6px] text-white ">
          Continue
        </button>
      </div>
    </div>
  );
};
