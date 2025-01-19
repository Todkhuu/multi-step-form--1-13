import { Input } from "./Input";
import { Button } from "./Button";
import { BackButton } from "./Button";
import { Header } from "./Header";
import { ThirdMiddle } from "./ThirdMiddle";
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";

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
    if (date) {
      setFormValues({
        ...formValues,
        date: date,
        file: file,
      });
    }
  }, []);

  const onFileUpload = (event) => {
    const file = event.target.files[0];
    const name = event.target.name;
    setImageUrl(URL.createObjectURL(file));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: file }));
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
      const reader = new FileReader();
      reader.onload = () => {
        const base64File = reader.result; // Base64 болгосон өгөгдөл
        localStorage.setItem("file", base64File); // LocalStorage-д хадгална
      };
      reader.readAsDataURL(file); // file-iig Base64-д хөрвүүлэх
    }
  };

  const handleClickDelete = () => {
    setImageUrl("");
  };

  const handleClickBack = () => {
    return setCurrentStep(currentStep - 1);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="w-[480px] min-h-[655px] rounded-lg bg-white p-8 flex flex-col justify-between"
    >
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
            type="file"
            value={formValues.file}
            onChange={onFileUpload}
            error={formErrors.file}
            imageUrl={imageUrl}
            name={"file"}
            onClick={handleClickDelete}
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
    </motion.div>
  );
};
