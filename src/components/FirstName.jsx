"use client";
import { Input } from "./Input";
import { Button } from "./Button";
import { useState } from "react";

export const FirstName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleButton = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      userName: "",
    };

    if (!firstName.trim()) {
      newErrors.firstName = "Нэрээ оруул";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Овгоо андаа";
    }
    if (!userName.trim()) {
      newErrors.userName = "Хэрэглэгчийн нэр";
    }

    setErrors(newErrors);
  };
  console.log(errors);

  return (
    <div className="w-[480px] h-[655px] rounded-lg bg-white p-8 flex flex-col justify-between">
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
            label={"First name"}
            placeholder={"Your first name"}
            error={errors.firstName} // Алдааны мессеж харуулах
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            label={"Last name"}
            placeholder={"Your last name"}
            error={errors.lastName} // Алдааны мессеж харуулах
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            label={"Username"}
            placeholder={"Your username"}
            error={errors.userName} // Алдааны мессеж харуулах
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={handleButton} bLabel={"Continue"} />
    </div>
  );
};

// //Алдаа байхгүй бол цааш үйлдэл хийх
// if (!newErrors.firstName && !newErrors.lastName && !newErrors.userName) {
//   console.log("Form submitted successfully!");
// }

// trim() -> Хэрэглэгч хоосон зай оруулсан ч шалгалтад хоосон гэж үзнэ.

// Form Validation сайжруулах: Тусгай тэмдэгт эсвэл тоо оруулж болохгүй гэх мэт нэмэлт шалгалтууд хийх.
// Loading Animation: Form илгээж байх үеийн ачаалал нэмэх.
// Success Message: Form амжилттай илгээгдсэний дараа хэрэглэгчдэд мэдэгдэл харуулах.
