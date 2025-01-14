"use client";
import { Input } from "./Input";
import { Button } from "./Button";
import { Header } from "./Header";
import { useState } from "react";

export const FirstStep = ({ setCurrentStep, currentStep }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { firstName, lastName, userName } = formValues;

    if (!firstName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Нэрээ оруул",
      }));
    }
    if (!lastName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Овгоо оруул",
      }));
    }
    if (!userName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        userName: "Хэрэглэгчийн нэр",
      }));
    }
    if (firstName.trim() && lastName.trim() && userName.trim()) {
      return setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="w-[480px] h-[655px] rounded-lg bg-white p-8 flex flex-col justify-between">
      <div>
        <Header />
        <div className="flex flex-col gap-3 mt-[28px]">
          <Input
            label={"First Name"}
            type={"text"}
            placeholder={"Your first name"}
            onChange={handleChange}
            error={formErrors.firstName}
            name={"firstName"}
          />
          <Input
            label={"Last Name"}
            type={"text"}
            placeholder={"Your last name"}
            onChange={handleChange}
            error={formErrors.lastName}
            name={"lastName"}
          />
          <Input
            label={"Username"}
            type={"text"}
            placeholder={"Your username"}
            onChange={handleChange}
            error={formErrors.userName}
            name={"userName"}
          />
        </div>
      </div>
      <Button
        onClick={handleClick}
        bLabel={"Continue"}
        currentStep={currentStep}
      />
    </div>
  );
};
