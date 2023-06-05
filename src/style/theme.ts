import { DefaultTheme } from "styled-components";

const colors = {
  white: "#ffffff",
  gray1: "#C7C9CC",
  gray2: "#A1AAB2",
  gray3: "#8A9299",
  gray4: "#737A80",
  gray5: "#45494D",
  black1: "#171819",
  blue1: "#717BD6",
  blue2: "#C5E4F8",
  bg_gradation1: "linear-gradient(180deg, #FBF8C2 8.33%, #F1B2BD 69.47%, #BFE5FA 94.79%)",
  bg_gradation2: "linear-gradient(180deg, #FFF9D3 48.96%, #FFCCD5 80.73%)",
  bg_blue: "radial-gradient(50% 50% at 50% 50%, #FAF7C8 0%, #E9F7FF 100%)"
};

export type ColorsTypes = typeof colors;

interface Font {
  family: boolean;
  weight: number;
  size: number;
  lineHeight: number;
}

function FONT({ family, weight, size, lineHeight }: Font): string {
  return `
    font-family: ${family ? "Pretendard" : "AnSsangCe"};
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
}

const fonts = {
  body1: FONT({ family: true, weight: 700, size: 2, lineHeight: 3 }),
  body2: FONT({ family: true, weight: 600, size: 2, lineHeight: 3 }),
  body3: FONT({ family: true, weight: 500, size: 1.8, lineHeight: 3 }),
  detail1: FONT({ family: true, weight: 600, size: 1.6, lineHeight: 2.2 }),
  detail2: FONT({ family: true, weight: 500, size: 1.6, lineHeight: 2.2 }),
  headline1: FONT({ family: false, weight: 400, size: 7, lineHeight: 3 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};