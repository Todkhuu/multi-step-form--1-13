import { Input } from "./Input";
import { Button } from "./Button";
import { BackButton } from "./Button";
import { Header } from "./Header";
import { ThirdMiddle } from "./ThirdMiddle";
import { useState } from "react";

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

    !date
      ? setFormErrors((prev) => ({ ...prev, date: "Төрсөн өдрөө оруулна уу", }))
      : "";
    !file
      ? setFormErrors((prev) => ({ ...prev, file: "Профайл зурагаа оруулна уу", }))
      : "";

    date && file ? setCurrentStep(currentStep + 1) : "";
  };

  const handleClickBack = () => {
    return setCurrentStep(currentStep - 1);
  };
  return (
    <div className="w-[480px] min-h-[655px] rounded-lg bg-white p-8 flex flex-col justify-between">
      <div>
        <Header />
        <div className="flex flex-col gap-3 mt-[28px]">
          <Input
            label={"Date of birth"}
            type={"date"}
            onChange={handleChange}
            error={formErrors.date}
            name={"date"}
          />
          <ThirdMiddle onChange={handleChange} error={formErrors.file} />
        </div>
      </div>
      <div className="flex gap-[10px]">
        <BackButton backClick={handleClickBack} bLabel={"Back"} />
        <Button
          onClick={handleClick}
          bLabel={"Continue"}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};
