import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { clickedEmotion, emotionData, emotionDataTypes, propsNameData, stepData } from "../../recoil/emotion";
import { HAPPY, SCARED, SORROWFUL, UNPLEASANT, detailEmotions } from "../../core/emotionsList";
import BottomButton from "./BottomButton";

export default function Question3() {
  const QUESTION_TEXT = `알려주셔서 고마워요. \n 오늘 기분은 어땠나요?`;
  const [id, setId] = useState(-1);
  const [emotion, setEmotion] = useRecoilState(emotionData);
  const [clickedMood, setClickedMood] = useRecoilState(clickedEmotion);
  const setStep = useSetRecoilState(stepData);
  const setPropsName = useSetRecoilState(propsNameData);
  const [isClicked, setIsClicked] = useState(false);
  const [showingEmotion, setShowingEmotion] = useState([]);

  const moveToStep2 = () => {
    setStep(2);
  };

  const moveToStep4 = () => {
    console.log(id);
    setStep(4);
    const newEmotions: number[] = [...emotion.emotions];
    newEmotions.push(id);
    setEmotion((prev) => ({ ...prev, emotions: newEmotions } as emotionDataTypes));
  };

  const ClickedEmotionBtn = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    setId(id); // 클릭 테두리용
    setPropsName(e.currentTarget.value);
    setClickedMood(e.currentTarget.value);
  };

  // useEffect(() => {
  //   ChangeName(clickedMood);
  // }, [clickedMood]);

  // const ChangeName = (clickedMood: string) => {
  //   switch (clickedMood) {
  //     case "기쁨":
  //       return setShowingEmotion(HAPPY);
  //     case "두려움":
  //       return setShowingEmotion(SCARED);
  //     case "불쾌감":
  //       return setShowingEmotion(UNPLEASANT);
  //     case "슬픔":
  //       return setShowingEmotion(SORROWFUL);
  //   }
  // };

  console.log("detailEmotions", detailEmotions);

  return (
    <>
      <St.AskBox>
        <St.QuestionContainer>{QUESTION_TEXT}</St.QuestionContainer>
      </St.AskBox>
      <St.selectContainer>
        {detailEmotions.map((item) => (
          <St.Questions
            $isClicked={item.id === id}
            onClick={(e) => ClickedEmotionBtn(e, item.id)}
            key={item.id}
            value={item.emotion}>
            {item.emotion}
          </St.Questions>
        ))}
      </St.selectContainer>
      <BottomButton moveToBack={moveToStep2} moveToNext={moveToStep4} backText="이전" nextText="다음" />
    </>
  );
}

const St = {
  AskBox: styled.div`
    background-color: rgba(256, 256, 256, 50%);
    padding: 4rem 4rem;
    font-size: 1.6rem;
    margin-bottom: 7.5rem;
  `,

  QuestionContainer: styled.article`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    white-space: pre-line;
  `,

  selectContainer: styled.article`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    white-space: pre-line;
    margin-bottom: 19rem;
  `,

  Questions: styled.button<{ $isClicked: boolean }>`
    flex: 1 1 40%;
    height: 5rem;
    border-radius: 12px;
    background: linear-gradient(120.7deg, rgba(255, 255, 255, 0.8) 5.47%, rgba(255, 255, 255, 0) 100%),
      linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border: ${({ $isClicked }) =>
      $isClicked ? "1px solid rgba(113, 123, 214, 1)" : "1px solid rgba(255, 255, 255, 1);"};
    margin: 5px 5px;
  `,
};
