import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { clickedEmotion, emotionData, showingEmotionData } from "../../recoil/emotion";
import BottomButton from "./BottomButton";

interface Question4Types {
  setStep: Dispatch<SetStateAction<boolean>>;
  propsName: [];
}

export default function Question4(props: Question4Types) {
  const { setStep, propsName } = props;

  const [emotion, setEmotion] = useRecoilState(emotionData);
  const clickedMood = useRecoilValue(clickedEmotion);

  const [isClicked, setIsClicked] = useState(false);
  const [id, setId] = useState(-1);

  const showingEmotion = useRecoilValue(showingEmotionData);

  const moveToStep3 = () => {
    setStep(3);
  };

  const moveToStep5 = () => {
    setStep(5);
  };

  useEffect(() => {
    console.log(emotion);
  }, [emotion]);

  // const ClickedEmotionBtn = (e: React.MouseEventHandler<HTMLButtonElement>, id: number) => {
  //   setIsClicked(true);
  //   setId(id);
  //   const newEmotions = [...emotion.emotions];
  //   newEmotions.push(id);
  //   setEmotion((prev) => ({ ...prev, emotions: newEmotions }));
  // };

  return (
    <>
      <St.AskBox>
        <St.QuestionContainer>
          <p> 알려주셔서 고마워요. </p>
          <p> 어떤 {clickedMood}이었죠? </p>
        </St.QuestionContainer>
      </St.AskBox>
      <St.selectContainer>
        {/* {showingEmotion.map((item) => (
          <St.Questions>{item.detailEmotion}</St.Questions>
        ))} */}
        {showingEmotion.map((item) => (
          <St.Questions
            isClicked={item.id === id}
            onClick={(e) => ClickedEmotionBtn(e, item.id)}
            key={item.id}
            value={item.detailEmotion}>
            {item.detailEmotion}
          </St.Questions>
        ))}
      </St.selectContainer>
      <BottomButton moveToBack={moveToStep3} moveToNext={moveToStep5} backText="이전" nextText="다음" />
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
  selectContainer: styled.section`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
  `,
  Questions: styled.button<{ isClicked: boolean }>`
    height: 50px;
    width: 140px;
    left: 0px;
    top: 0px;
    border-radius: 12px;
    background: linear-gradient(120.7deg, rgba(255, 255, 255, 0.8) 5.47%, rgba(255, 255, 255, 0) 100%),
      linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    margin: 5px 5px;
    border: ${({ isClicked }) =>
      isClicked ? "1px solid rgba(113, 123, 214, 1)" : "1px solid rgba(255, 255, 255, 1);"};
  `,
};
