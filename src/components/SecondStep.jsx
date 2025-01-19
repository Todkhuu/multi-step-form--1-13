"use client";
import { Input } from "./Input";
import { Button, BackButton } from "./Button";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import * as motion from "motion/react-client";

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

  useEffect(() => {
    const Email = localStorage.getItem("email");
    const phonenumber = localStorage.getItem("phoneNumber");
    const Password = localStorage.getItem("password");
    const confirmpassword = localStorage.getItem("confirmPassword");
    if (Email && phonenumber && Password && confirmpassword) {
      console.log(Email && phonenumber && Password && confirmpassword);
      setFormValues({
        ...formValues,
        email: Email,
        phoneNumber: phonenumber,
        password: Password,
        confirmPassword: confirmpassword,
      });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value.toUpperCase() }));
  };

  const handleClick = () => {
    const { email, phoneNumber, password, confirmPassword } = formValues;
    let isValid = true;

    if (!email.trim()) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, email: "Мэйл хаягаа оруулна уу" }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      setFormErrors((prev) => ({
        ...prev,
        email: "Зөв мэйл хаягаа оруулна уу",
      }));
    }

    if (!phoneNumber.trim()) {
      isValid = false;
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Утасны дугаараа оруулна уу.",
      }));
    } else if (!/^\+?\d{8}$/.test(phoneNumber)) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, phoneNumber: "Тоо оруулна уу" }));
    }

    if (phoneNumber.length < 8) {
      isValid = false;
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "8 оронтой дугаар оруулна уу.",
      }));
    }

    if (!password.trim()) {
      isValid = false;
      setFormErrors((prev) => ({ ...prev, password: "Нууц үгээ оруулна уу" }));
    } else if (password.length < 6) {
      isValid = false;
      setFormErrors((prev) => ({
        ...prev,
        password: "6 оронтой дугаар оруулна уу.",
      }));
    }

    if (!confirmPassword.trim()) {
      isValid = false;
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Нууц үгээ давтаж оруулна уу",
      }));
    }

    if (password !== confirmPassword) {
      isValid = false;
      setFormErrors((prev) => ({
        ...prev,
        confirmPassword: "Таны оруулсан нууц үг таарахгүй байна.",
      }));
    }

    if (isValid) {
      setCurrentStep(currentStep + 1);
      localStorage.setItem("email", formValues.email);
      localStorage.setItem("phoneNumber", formValues.phoneNumber);
      localStorage.setItem("password", formValues.password);
      localStorage.setItem("confirmPassword", formValues.confirmPassword);
    }
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
            label={"Email"}
            type={"email"}
            placeholder={"Your email"}
            value={formValues.email}
            onChange={handleChange}
            error={formErrors.email}
            name={"email"}
          />
          <Input
            label={"Phone number"}
            type={"text"}
            placeholder={"Your phone number"}
            value={formValues.phoneNumber}
            onChange={handleChange}
            error={formErrors.phoneNumber}
            name={"phoneNumber"}
          />
          <Input
            label={"Password"}
            type={"password"}
            placeholder={"Your password"}
            value={formValues.password}
            onChange={handleChange}
            error={formErrors.password}
            name={"password"}
          />
          <Input
            label={"Confirm password"}
            type={"password"}
            placeholder={"Confirm password"}
            value={formValues.confirmPassword}
            onChange={handleChange}
            error={formErrors.confirmPassword}
            name={"confirmPassword"}
          />
        </div>
      </div>
      <div className="flex gap-[10px]">
        <BackButton
          whileTap={{ y: 1 }}
          backClick={handleClickBack}
          bLabel={"Back"}
        />
        <Button
          whileTap={{ y: 1 }}
          onClick={handleClick}
          bLabel={"Continue"}
          currentStep={currentStep}
        />
      </div>
    </motion.div>
  );
};
