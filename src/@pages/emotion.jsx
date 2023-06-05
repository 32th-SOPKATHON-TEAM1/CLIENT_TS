import { useState } from "react";
import StepRender from "../@components/emotion/StepRenderer"
import styled from "styled-components";

export default function Emotion() {
  // const [step, setStep] = useState<number>(1);
  return (
    <St.background>
      <St.AskWrapper>
        <StepRender/> 
      </St.AskWrapper>
    </St.background>
  )

}

const St = {
  background: styled.div `
    background: ${({ theme }) => theme.colors.bg_gradation1};
    padding: 1.2rem;
    height: 100vh;
  `,
  AskWrapper : styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 6.2rem;
  `,
}
