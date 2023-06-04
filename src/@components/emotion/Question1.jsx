import { RefObject, useEffect, useRef } from 'react'
import  styled  from 'styled-components'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import { emotionData, stepData, userNameData } from '../../recoil/emotion';
// import next_btn from  '../../assets/image/next_btn.png'
// import previous_btn from  '../../assets/image/previous_btn.png'
import { useNavigate } from 'react-router-dom';

export default function Question1 () {
  
  const navigation = useNavigate()
  
  const [emotion, setEmotion] = useRecoilState(emotionData);
  const setUserName = useSetRecoilState(userNameData);
  const setStep = useSetRecoilState(stepData);
  
  const QuestText = 
  { 0: `반가워요.
  저는 당신이 오늘 느낀 감정을
  한 장의 사진으로 전달해 드릴
  사진사 로버트입니다. \n 
  먼저 당신의 이름을 
  알려주시겠어요? ` }
  
  
  const moveToIntro = () => {
    navigation('/');
  }
  
  // const nameRef = useRef<HTMLInputElement>(null); TS
  const nameRef = useRef(null); 


  const moveToStep2 = () => {
    if (nameRef.current) {
      // null 체크 가져와서
      const value = nameRef.current.value;
      if (value) {
        // 값을 더 명확하게 가지고 오기
        setEmotion((prev) => ({ ...prev, name: value }))
      }
    } else {
      console.log('nameRef is null')
    }

    setStep(2);
  }
  
  
  useEffect(() => {
  }, [emotion])

  // const getUserName = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setUserName(e.target.value);
  // }

  const getUserName = (e) => {
    setUserName(e.target.value);
  }


  return (
      <>
      <St.AskWrapper>
        <St.AskBox>
          <St.QuestionContainer>
              {QuestText[0]}
          </St.QuestionContainer>
        </St.AskBox>
        <St.AnswerName
          onChange={getUserName}
          placeholder='이름을 입력해주세요'
          type='text'
          ref={nameRef} />
        <St.ButtonContainer>
          <St.PrevBtn>이전</St.PrevBtn>
        </St.ButtonContainer>
          {/* <img className="prev_btn" src={previous_btn} onClick={moveToIntro}  />
          <img className="next_btn" src={next_btn}  onClick={moveToStep2}  /> */}
      </St.AskWrapper>
      </>
  )
}

const St = {
  AskWrapper : styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  AskBox: styled.div`
    background-color: rgba(256, 256, 256, 50%);
    padding: 4rem 0rem; 
    margin: 2rem;
    font-size: 1.6rem
  `,

  QuestionContainer: styled.article `
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    white-space: pre-line;
    > img { 
      margin-left: 24px;
      width: 272px;
    }
  `,

  AnswerName : styled.input`
  box-sizing: border-box;
  margin: 55px 0px;
  padding: 10px;
  
  background: rgba(255, 255, 255, 0.5);

  height: 50px;
  width: 100%;
  border-radius: 12px;

  
  border: 1px solid #FFFFFF;
  box-shadow: 0px 0px 4px 3px rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  `,

  ButtonContainer : styled.div`
  display: flex;
  flex-direction: row;

  .prev_btn {
    height: 70;
    width: 104px;
    border-radius: 0px;

  }
  .next_btn {
    height: 70px;
    width: 220px;
    border-radius: 0px;

  }
  `,
  PrevBtn: styled.div`
    filter: drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.15));
    backdrop-filter: blur(15px);
    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    box-shadow: 0px 3px 10px 0px #00000026;
    


  `,

  NextBtn: styled.div `

  `,
}
