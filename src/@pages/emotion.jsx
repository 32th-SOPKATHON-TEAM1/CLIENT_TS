import { useState } from "react";
import StepRender from "../@components/emotion/StepRenderer"
import styled from "styled-components";

export default function Emotion() {
  // const [step, setStep] = useState<number>(1);
  return (
    <St.background>
      <StepRender/>
    </St.background>
  )

}

const St = {
  background: styled.div `
    background: ${({ theme }) => theme.colors.bg_gradation1};
  `
}
