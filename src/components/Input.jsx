export const Input = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#334155] text-[14px] font-semibold ">{label}</p>
      <input
        className="border-[#334155] border-[1px] rounded-lg outline-none w-[416px] h-[40px] text-base p-3 active:border-[#0CA5e9]"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
