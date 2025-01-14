export const Input = ({ label, placeholder, error, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[#334155] text-[14px] font-semibold ">
        {label}
        <span className="text-[#e14942]">*</span>
      </p>
      <input
        className={`border-[#334155] border-[1px] rounded-lg outline-none w-[416px] h-[40px] text-base p-3 ${
          error ? "border-red-600" : "focus:border-green-600"
        }`}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <p className="text-[14px] text-[#e14942] ">{error}</p>
    </div>
  );
};
