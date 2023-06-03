import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
 
export default function Question1() {

    const navigation = useNavigate();
    const [emotion, setEmotions] = useRecoilState(emotionData);
  return (
    <div>
      
    </div>
  )
}
