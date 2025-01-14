"use client";
import { FirstStep } from "@/components/FirstStep";
import { SecondStep } from "@/components/SecondStep";
import { ThirdStep } from "@/components/ThirdStep";
import { End } from "@/components/End";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const FormSteps = [FirstStep, SecondStep, ThirdStep, End][currentStep];
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}
