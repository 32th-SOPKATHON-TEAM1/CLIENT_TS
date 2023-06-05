import { useEffect, useState } from 'react'
import   styled   from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { clickedEmotion, emotionData, propsNameData, stepData } from '../../recoil/emotion';
import { HAPPY, SCARED, SORROWFUL, UNPLEASANT, detailEmotions } from '../../core/emotionsListJS';

export default function Question3() {
  const [id, setId] = useState(-1);
  const [emotion, setEmotion] = useRecoilState(emotionData);
  const [clickedMood, setClickedMood] = useRecoilState(clickedEmotion);
  const [isClicked, setIsClicked] = useState(false);
  const setStep = useSetRecoilState(stepData);
  const setPropsName = useSetRecoilState(propsNameData);

  const moveToStep2 = () => {
    setStep(2);
  }
  const moveToStep4 = () => {  
    setStep(4);
  }


  const QuestText = 
  {
    0: `알려주셔서 고마워요.
  오늘 기분은 어땠나요?` }

  const ClickedEmotionBtn = (e, id) => {
    // 이전 선택되었던 거 초기화하는 로직 추가 필요
    setIsClicked(true);
    setId(id);
    const newEmotions = [...emotion.emotions]
    setPropsName(e.target.value)
    newEmotions.push(id)
    setEmotion((prev)=>({...prev, emotions: newEmotions})) 
    setClickedMood(e.target.value)
  }

  useEffect(() => {
    ChangeName(clickedMood)
  }, [clickedMood])


  const ChangeName = (clickedMood) => {
    switch (clickedMood) {
      case "기쁨":
        return setClickedMood(HAPPY);
      case "두려움":
        return setClickedMood(SCARED);
      case "불쾌감":
        return setClickedMood(UNPLEASANT);
      case "슬픔":
        return setClickedMood(SORROWFUL);
    }
  }



  return (
    <>
        <St.AskBox>
          <St.QuestionContainer>
            {QuestText[0]}
          </St.QuestionContainer>
        </St.AskBox>
      <St.selectContainer> 
        {detailEmotions.map((item) => (
          <St.Questions isClicked={item.id===id} onClick={(e)=>ClickedEmotionBtn(e, item.id)} key={item.id} value={item.emotion}>{item.emotion}</St.Questions>
          ))} 
      </St.selectContainer>
      <St.ButtonContainer>
          <St.PrevBtn onClick={moveToStep2}>이전</St.PrevBtn>
          <St.NextBtn onClick={moveToStep4}>다음</St.NextBtn>
      </St.ButtonContainer>
    </>
  )
}

const St = {

  AskBox: styled.div`
    background-color: rgba(256, 256, 256, 50%);
    padding: 4rem 4rem; 
    font-size: 1.6rem;
    margin-bottom: 7.5rem;
  `,

  QuestionContainer: styled.article `
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    white-space: pre-line;
    /* margin-bottom: 19rem; */
  `,

  selectContainer: styled.article `
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    white-space: pre-line;
    margin-bottom: 19rem;
  `,

  Questions: styled.button `
    flex: 1 1 40%;
    height: 5rem;
    border-radius: 12px;
    background: linear-gradient(120.7deg, rgba(255, 255, 255, 0.8) 5.47%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border: ${({isClicked}) => (isClicked ? '1px solid rgba(113, 123, 214, 1)' : '1px solid rgba(255, 255, 255, 1);')};
    margin: 5px 5px;
    `,


  ButtonContainer : styled.div`
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

    background: 
      linear-gradient(88.06deg, rgba(255, 255, 255, 0.6) 25.59%, rgba(255, 255, 255, 0.2) 77.45%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
      linear-gradient(272.47deg, rgba(255, 255, 255, 0.8) -4.42%, rgba(255, 255, 255, 0.2) 100.79%);
    box-shadow: 0px 3px 10px 0px #00000026;
      filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.15));

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.gray3};

    border-radius: 12px;
    `,

  NextBtn: styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 22rem;
    height: 6rem;

    background: 
      linear-gradient(88.06deg, rgba(255, 255, 255, 0.6) 25.59%, rgba(255, 255, 255, 0.2) 77.45%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
      linear-gradient(272.47deg, rgba(255, 255, 255, 0.8) -4.42%, rgba(255, 255, 255, 0.2) 100.79%);
    box-shadow: 0px 3px 10px 0px #00000026;
      filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.15));

    ${({ theme }) => theme.fonts.body1};
    color: ${({ theme }) => theme.colors.blue1};

    border-radius: 12px;

  `

}
