"use client";
import { FirstFormFields } from "./FirstFormFields";
import { Button } from "./Button";
import { Header } from "./Header";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    const firstname = localStorage.getItem("firstName");
    const lastname = localStorage.getItem("lastName");
    const username = localStorage.getItem("userName");
    if (firstname && lastname && username) {
      console.log("ajilj bn");
      setFormValues({
        ...formValues,
        firstName: firstname,
        lastName: lastname,
        userName: username,
      });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { firstName, lastName, userName } = formValues;
    let isValid = true;

    if (!firstName.trim()) {
      setFormErrors((prev) => ({ ...prev, firstName: "Нэрээ оруул" }));
      isValid = false;
    } else if (/[^a-zA-Z]/.test(firstName)) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, firstName: "Текст оруулна уу" }));
    }

    if (!lastName.trim()) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, lastName: "Овгоо оруул" }));
    } else if (/[^a-zA-Z]/.test(lastName)) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, lastName: "Текст оруулна уу" }));
    }
    if (!userName.trim()) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, userName: "Хэрэглэгчийн нэр" }));
    } else if (/[^a-zA-Z]/.test(userName)) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, userName: "Текст оруулна уу" }));
    }

    if (isValid) {
      setCurrentStep(currentStep + 1);
      localStorage.setItem("firstName", formValues.firstName);
      localStorage.setItem("lastName", formValues.lastName);
      localStorage.setItem("userName", formValues.userName);
    }
  };

  return (
    <div className="w-[480px] h-[655px] rounded-lg bg-white p-8 flex flex-col justify-between">
      <div>
        <Header />
        <FirstFormFields
          formValues={formValues}
          formErrors={formErrors}
          handleChange={handleChange}
        />
      </div>
      <Button
        onClick={handleClick}
        bLabel={"Continue"}
        currentStep={currentStep}
      />
    </div>
  );
};
