import { Input } from "./Input";
import { Button } from "./Button";
import { BackButton } from "./Button";
import { Header } from "./Header";
import { ThirdMiddle } from "./ThirdMiddle";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const date = localStorage.getItem("date");
    const file = localStorage.getItem("file");
    if (date && file) {
      console.log(date && file);
      setFormValues({
        ...formValues,
        date: date,
        file: file,
      });
    }
  }, []);

  const onFileUpload = (event) => {
    const files = event.target.files[0];
    const name = event.target.name;
    setImageUrl(URL.createObjectURL(files));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: files }));
  };
  // console.log(formValues.file);

  let userYear = 0;
  if (formValues.date) {
    let userDate = formValues.date.split("-");
    userYear = userDate.at(0);
  }
  let nowDate = new Date();
  let nowYear = nowDate.getFullYear();
  let result = nowYear - userYear;

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { date, file } = formValues;
    let isValid = true;

    if (!date) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, date: "Төрсөн өдрөө оруулна уу" }));
    }

    if (!file) {
      isValid = false;
      setFormErrors((prev) => ({
        ...prev,
        file: "Профайл зурагаа оруулна уу",
      }));
    }

    if (formValues.date && result < 18) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, date: "Насанд хүрээгүй байна" }));
    }

    if (isValid) {
      setCurrentStep(currentStep + 1);
      localStorage.setItem("date", formValues.date);
      localStorage.setItem("file", formValues.file.name);
    }
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
            value={formValues.date}
            onChange={handleChange}
            error={formErrors.date}
            name={"date"}
          />
          <ThirdMiddle
            value={formValues.file}
            onChange={onFileUpload}
            error={formErrors.file}
            imageUrl={imageUrl}
            name={"file"}
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
