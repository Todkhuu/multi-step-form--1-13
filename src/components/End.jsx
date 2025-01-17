export const End = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="w-[480px] h-[193px] bg-white rounded-md p-8"
    >
      <img src="/logo.png" alt="" />
      <h2 className="text-[#202124] text-[26px] font-semibold mt-2 ">
        You're All Set 🔥
      </h2>
      <p className="text-[#8E8E8E] text-[18px] mt-2">
        We have received your submission. Thank you!
      </p>
    </motion.div>
  );
};
