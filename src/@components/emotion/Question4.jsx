import React from 'react'
import { useRecoilValue } from 'recoil';
import { emotionData } from '../../recoil/emotion';

export default function Question4() {

  const emotion = useRecoilValue(emotionData);

    console.log(emotion)
  return (
    <div>
      
    </div>
  )
}
