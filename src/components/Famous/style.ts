import styled, { keyframes } from "styled-components";

type vhState = {
  vh: string;
};
export const Background = styled.div<vhState>`
  position: relative;
  background-image: linear-gradient(var(--backgroundsecondary), transparent);
  height: ${({ vh }) => `calc(${vh} * 100)`};
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
    text-align: center;
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
  position: relative;
  flex:1;
  height: 100%;
  width:100%;
  @media (max-width: 720px) {
    height: 50%;
  }
`;

export const TextWrapper = styled.div`
  font-size: 2rem;
  flex:1;
`;
export const Text1 = styled.span`
  color: var(--textheighlight);
  font-weight: 600;
  font-size: 2.2rem;
`;

export const ThemeWrapper = styled.div`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  z-index:10;
`;
