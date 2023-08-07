import { useRef } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { emotionData, emotionDataTypes, stepData, userNameData } from "../../recoil/emotion";
import { useNavigate } from "react-router-dom";
import BottomButton from "./BottomButton";

export default function Question1() {
  const navigation = useNavigate();

  const setEmotion = useSetRecoilState(emotionData);
  const setUserName = useSetRecoilState(userNameData);
  const setStep = useSetRecoilState(stepData);

  const QUESTION_TEXT = `반가워요.
  저는 당신이 오늘 느낀 감정을
  한 장의 사진으로 전달해 드릴
  사진사 로버트입니다. \n 
  먼저 당신의 이름을 
  알려주시겠어요? `;

  const moveToIntro = () => {
    navigation("/");
  };

  const nameRef = useRef<HTMLInputElement>(null);

  const moveToStep2 = () => {
    if (nameRef.current) {
      const value = nameRef.current.value;
      if (value) {
        setEmotion((prev) => ({ ...prev, name: value } as emotionDataTypes));
      }
    } else {
      console.log("nameRef is null");
    }

    setStep(2);
  };

  const getUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <St.AskBox>
        <St.QuestionContainer>{QUESTION_TEXT}</St.QuestionContainer>
      </St.AskBox>
      <St.AnswerName onChange={getUserName} placeholder="이름을 입력해주세요" type="text" ref={nameRef} />
      <BottomButton moveToNext={moveToStep2} moveToBack={moveToIntro} backText="이전" nextText="다음" />
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
