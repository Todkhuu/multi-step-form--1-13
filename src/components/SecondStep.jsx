import { Input } from "./Input";
import { Button, BackButton } from "./Button";
import { Header } from "./Header";
import { useState } from "react";

export const SecondStep = ({ setCurrentStep, currentStep }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { email, phoneNumber, password, confirmPassword } = formValues;

    if (!email.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Мэйл хаягаа оруулна уу",
      }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Зөв мэйл хаяг оруулна уу",
      }));
    }
    if (!phoneNumber.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Утасны дугаараа оруулна уу.",
      }));
    } else if (!/^\+?\d{8}$/.test(phoneNumber)) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Тоо оруулна уу",
      }));
    } else if (phoneNumber.length < 8) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "8 оронтой дугаар оруулна уу.",
      }));
    }
    if (!password.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        password: "Нууц үгээ оруулна уу",
      }));
    }
    if (!confirmPassword.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Нууц үгээ давтаж оруулна уу",
      }));
    }
    if (password.length < 6) {
      setFormErrors((prev) => ({
        ...prev,
        password: "6 оронтой дугаар оруулна уу.",
      }));
    } else if (password !== confirmPassword) {
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Таны оруулсан нууц үг таарахгүй байна.",
      }));
    } else {
      return setCurrentStep(currentStep + 1);
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
            label={"Email"}
            type={"email"}
            placeholder={"Your email"}
            onChange={handleChange}
            error={formErrors.email}
            name={"email"}
          />
          <Input
            label={"Phone number"}
            type={"text"}
            placeholder={"Your phone number"}
            onChange={handleChange}
            error={formErrors.phoneNumber}
            name={"phoneNumber"}
          />
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Your password"}
            onChange={handleChange}
            error={formErrors.password}
            name={"password"}
          />
          <Input
            label={"Confirm password"}
            type={"password"}
            placeholder={"Confirm password"}
            onChange={handleChange}
            error={formErrors.confirmPassword}
            name={"confirmPassword"}
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
