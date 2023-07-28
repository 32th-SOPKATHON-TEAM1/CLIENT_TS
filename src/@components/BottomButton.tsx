import styled from "styled-components";

interface BottomButtonTypes {
  moveToBack: (e: React.MouseEvent<HTMLElement>) => void;
  moveToNext: (e: React.MouseEvent<HTMLElement>) => void;
  backText: string;
  nextText: string;
}

export default function BottomButton(props: BottomButtonTypes) {
  const { moveToBack, moveToNext, backText, nextText } = props;
  return (
    <St.ButtonContainer>
      <St.PrevBtn onClick={moveToBack}>{backText}</St.PrevBtn>
      <St.NextBtn onClick={moveToNext}>{nextText}</St.NextBtn>
    </St.ButtonContainer>
  );
}

const St = {
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
