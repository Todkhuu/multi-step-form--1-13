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
  const [imageUrl, setImageUrl] = useState();

  const onFileUpload = (event) => {
    const file = event.target.files[0];
    setImageUrl(URL.createObjectURL(file));
    const { name, files } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: files }));
  };
  console.log(formValues.file);

  let userDate = formValues.date.split("-");
  let userYear = userDate.at(0);
  let nowDate = new Date();
  let nowYear = nowDate.getFullYear();
  let result = nowYear - userYear;
  console.log(result);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { date, file } = formValues;

    !date
      ? setFormErrors((prev) => ({ ...prev, date: "Төрсөн өдрөө оруулна уу" }))
      : "";
    !file
      ? setFormErrors((prev) => ({
          ...prev,
          file: "Профайл зурагаа оруулна уу",
        }))
      : "";
    result < 18
      ? setFormErrors((prev) => ({ ...prev, date: "Насанд хүрээгүй байна" }))
      : "";

    date && file && result > 18 ? setCurrentStep(currentStep + 1) : "";
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
          <ThirdMiddle
            onChange={onFileUpload}
            error={formErrors.file}
            imageUrl={imageUrl}
          />
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
