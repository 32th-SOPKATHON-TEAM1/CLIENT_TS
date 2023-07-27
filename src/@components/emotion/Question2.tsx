import { useRef } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { emotionData, emotionDataTypes, stepData, userNameData } from "../../recoil/emotion";

export default function Question2() {
  const setEmotion = useSetRecoilState(emotionData);
  const userName = useRecoilValue(userNameData);
  const setStep = useSetRecoilState(stepData);
  const todayRef = useRef<HTMLInputElement>(null);

  const QUESTION_TEXT = `님,
오늘 하루는 어땠나요?
한 줄로 이야기해 주세요.

이게 사진의 이름이 될 거예요.`;

  const moveToStep1 = () => {
    setStep(1);
  };

  const moveToStep3 = () => {
    if (todayRef.current) {
      const value = todayRef.current.value;
      if (value) {
        setEmotion((prev) => ({ ...prev, title: value } as emotionDataTypes));
      } else {
        console.log("todayRef is null");
      }
    }
    setStep(3);
  };

  return (
    <>
      <St.AskBox>
        <St.QuestionContainer>
          {userName}
          {QUESTION_TEXT}
        </St.QuestionContainer>
      </St.AskBox>
      <St.AnswerName placeholder="오늘 하루를 정리해주세요." type="text" ref={todayRef} />
      <St.ButtonContainer>
        <St.PrevBtn onClick={moveToStep1}>이전</St.PrevBtn>
        <St.NextBtn onClick={moveToStep3}>다음</St.NextBtn>
      </St.ButtonContainer>
    </>
  );
}

const St = {
  AskBox: styled.div`
    background-color: rgba(256, 256, 256, 50%);
    padding: 4rem 4rem;
    font-size: 1.6rem;
  `,

  QuestionContainer: styled.article`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    white-space: pre-line;
  `,

  AnswerName: styled.input`
    width: 100%;
    height: 50px;
    margin: 55px 0px;

    box-sizing: border-box;
    padding: 10px;

    background: rgba(255, 255, 255, 0.5);

    border-radius: 12px;
    border: 1px solid #ffffff;
    box-shadow: 0px 0px 4px 3px rgba(255, 255, 255, 0.2);
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
  `,

  PrevBtn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 10.4rem;
    height: 6rem;

    background: linear-gradient(88.06deg, rgba(255, 255, 255, 0.6) 25.59%, rgba(255, 255, 255, 0.2) 77.45%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
      linear-gradient(272.47deg, rgba(255, 255, 255, 0.8) -4.42%, rgba(255, 255, 255, 0.2) 100.79%);
    box-shadow: 0px 3px 10px 0px #00000026;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.15));

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray3};

    border-radius: 12px;
  `,

  NextBtn: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 22rem;
    height: 6rem;

    background: linear-gradient(88.06deg, rgba(255, 255, 255, 0.6) 25.59%, rgba(255, 255, 255, 0.2) 77.45%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
      linear-gradient(272.47deg, rgba(255, 255, 255, 0.8) -4.42%, rgba(255, 255, 255, 0.2) 100.79%);
    box-shadow: 0px 3px 10px 0px #00000026;
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.15));

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.blue1};

    border-radius: 12px;
  `,
};
