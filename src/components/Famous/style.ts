import styled, { keyframes } from "styled-components";

export const Background = styled.div`
  background-image: linear-gradient(
    var(--backgroundsecondary),
    var(--backgroundprimary)
  );
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  height: 100%;
  flex: 1;
  & div {
    color: var(--textprimary);
    flex: 1;
    text-align: center;
  }
  & div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const move = keyframes`
0%,50%,84% ,100% { transform: translateY(0px);}
75%,92% { transform: translateY(-15px);}
`;

export const ArrowWrapper = styled.div`
  text-align: center;
  & svg {
    animation: ${move} 4s infinite forwards;
  }
`;
const image = keyframes`
0%,100%{
  transform: translateY(5px);
}
50%{
  transform: translateY(-5px);
}
`;

export const ImageWrapper = styled.div`
  animation: ${image} 3s infinite linear;
`;

export const TextWrapper = styled.div`
  font-size: 2rem;
`;
export const Text1 = styled.span`
  color: var(--textheighlight);
  font-weight: 600;
  font-size: 2.2rem;
`;
