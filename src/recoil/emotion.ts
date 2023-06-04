import { atom } from "recoil";

// export interface 

export const emotionData = atom({
  key: "emotionData",
  default: { name: "", title: "", emotions: [] },
});

export const clickedEmotion = atom({
  key: "clickedEmotion",
  default: "",
});

export const responseEmotion = atom({
  key: "responseEmotion",
  default: [],
});

export const userNameData = atom({
    key: "userNameData",
    default: "",
});

export const stepData = atom({
    key: "stepData",
    default: 0,
});

export const propsNameData = atom({
    key: "propsNameData",
    default: "",
});