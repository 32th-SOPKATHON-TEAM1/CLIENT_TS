import { useRef } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { emotionData, emotionDataTypes, stepData, userNameData } from "../../recoil/emotion";
import BottomButton from "./BottomButton";

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
      <BottomButton moveToNext={moveToStep1} moveToBack={moveToStep3} backText="이전" nextText="다음" />
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
};
