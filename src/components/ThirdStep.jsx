import { Input } from "./Input";
import { Button } from "./Button";
import { BackButton } from "./Button";
import { useState } from "react";
import { Image } from "lucide-react";

export const ThirdStep = ({ currentStep, setCurrentStep }) => {
  const [formValues, setFormValues] = useState({
    date: "",
    file: "",
  });
  const [formErrors, setFormErrors] = useState({
    date: "",
    file: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { date, file } = formValues;

    if (!date.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        date: "Төрсөн өдрөө оруулна уу",
      }));
    }
    if (!file.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        file: "Профайл зурагаа оруулна уу",
      }));
    }

    if (date.trim() && file.trim()) {
      return setCurrentStep(currentStep + 1);
    }
  };

  const handleClickBack = () => {
    return setCurrentStep(currentStep - 1);
  };
  return (
    <div className="w-[480px] min-h-[655px] rounded-lg bg-white p-8 flex flex-col justify-between">
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
            label={"Date of birth"}
            type={"date"}
            onChange={handleChange}
            error={formErrors.date}
            name={"date"}
          />
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
              <p className="text-[#272729] text-[14px] font-medium">
                Add image
              </p>
            </div>
            <input type="file" onChange={handleChange} name="file" />
            <p className="text-[14px] mt-2 text-red-600 ">{formErrors.file} </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[10px]">
        <BackButton back={handleClickBack} bLabel={"Back"} />
        <Button
          onClick={handleClick}
          bLabel={"Continue"}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};
