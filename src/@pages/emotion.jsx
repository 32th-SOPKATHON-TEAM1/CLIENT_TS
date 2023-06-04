import { useState } from "react";
import StepRender from "../@components/emotion/StepRenderer"
import styled from "styled-components";

export default function Emotion() {
  const [step, setStep] = useState<number>(1);
  return (
    <St.background>
      <StepRender step={step} setStep={setStep} />
    </St.background>
  )

}

const St = {
  background: styled.div `
    background-color: ${({ theme }) => theme.colors.blue1};
  `
}
