import { atom } from "recoil";

export interface emotionDataTypes {
  name: string;
  title: string;
  emotions: [];
}

export const emotionData = atom<emotionDataTypes>({
  key: "emotionData",
  default: { name: "", title: "", emotions: [] },
});

export const clickedEmotion = atom<string>({
  key: "clickedEmotion",
  default: "",
});

export const showingEmotionData = atom<[]>({
  key: "showingEmotionData",
  default: [],
});

export const userNameData = atom<string>({
  key: "userNameData",
  default: "",
});

export const stepData = atom<number>({
  key: "stepData",
  default: 1,
});

export const propsNameData = atom<string>({
  key: "propsNameData",
  default: "",
});
