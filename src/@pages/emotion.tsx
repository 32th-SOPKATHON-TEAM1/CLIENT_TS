import { useState } from "react";

export default function Emotion() {
  const [step, setStep] = useState(1);
  return (
    <>
      <StepRenderer step={step} setStep={setStep} />

    </>
  )

}
