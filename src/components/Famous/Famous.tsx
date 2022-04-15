import React, { useEffect } from "react";
import {
  ArrowWrapper,
  Background,
  ImageWrapper,
  Text1,
  TextWrapper,
  Wrapper,
} from "./style";
import FamousData from "../../data/FamousData";
import { Container } from "../../../styles/container";
import DownArrow from "../../svg/DownArrow";

const Famous = () => {
  const { image, text1, text2 } = FamousData;

  const ScrollToItems = () => {
    const element = document.getElementById("Items") as HTMLImageElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <Background>
      <Wrapper as={Container}>
        <ImageWrapper>
          <img src={image} alt={text1} width="100%" loading="lazy" />
        </ImageWrapper>
        <TextWrapper>
          We are Famous For <Text1>{text1}</Text1>, {text2}
        </TextWrapper>
      </Wrapper>
      <ArrowWrapper onClick={ScrollToItems}>
        <DownArrow />
      </ArrowWrapper>
    </Background>
  );
};

export default Famous;
