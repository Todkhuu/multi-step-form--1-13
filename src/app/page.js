"use client";
import { FirstStep } from "@/components/FirstStep";
import { SecondStep } from "@/components/SecondStep";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const FormSteps = [FirstStep, SecondStep][currentStep];
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <FormSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}
