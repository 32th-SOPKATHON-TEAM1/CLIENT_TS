import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { clickedEmotion, emotionData } from "../../recoil/emotion";

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
          <p> 어떤 {propsName}이었죠? </p>
        </St.QuestionContainer>
      </St.AskBox>
      <St.selectContainer>
        {/* {clickedMood.map((item) => (
          <St.Questions
            isClicked={item.id === id}
            onClick={(e) => ClickedEmotionBtn(e:React.MouseEventHandler<HTMLButtonElement></HTMLButtonElement>, item.id)}
            key={item.id}
            value={item.detailEmotion}>
            {item.detailEmotion}
          </St.Questions>
        ))} */}
      </St.selectContainer>
      <St.ButtonContainer>
        <St.PrevBtn onClick={moveToStep3}>이전</St.PrevBtn>
        <St.NextBtn onClick={moveToStep5}>다음</St.NextBtn>
      </St.ButtonContainer>
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
  Questions: styled.button`
    height: 50px;
    width: 158px;
    left: 0px;
    top: 0px;
    border-radius: 12px;
    background: linear-gradient(120.7deg, rgba(255, 255, 255, 0.8) 5.47%, rgba(255, 255, 255, 0) 100%),
      linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    margin: 5px 5px;
    border: ${({ isClicked }) =>
      isClicked ? "1px solid rgba(113, 123, 214, 1)" : "1px solid rgba(255, 255, 255, 1);"};
  `,

  ButtonContainer: styled.div`
    display: flex;
    justify-content: center;
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
