import React, { useEffect, useState } from "react";
import {
  ArrowWrapper,
  Background,
  ImageWrapper,
  Text1,
  TextWrapper,
  ThemeWrapper,
  Wrapper,
} from "./style";
import FamousData from "../../data/FamousData";
import { Container } from "../../../styles/container";
import DownArrow from "../../svg/DownArrow";
import { useTheme } from "../../providers/ThemeProviders";
import Image from "next/image";

const Famous = () => {
  const { image, text1, text2 } = FamousData;
  const { theme, setTheme } = useTheme();
  const [vh, setvh] = useState("1px");

  const ScrollToItems = () => {
    const element = document.getElementById("Items") as HTMLImageElement;
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;

    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  function appHeight() {
    const doc = document.documentElement;
    // doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
    setvh(`${window.innerHeight * 0.01}px`);
  }

  useEffect(() => {
    appHeight();
  }, []);

  return (
    <Background vh={vh}>
      <ThemeWrapper
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <img
          src={`/${theme === "light" ? "moon" : "sun"}.svg`}
          width="20px"
        />
      </ThemeWrapper>
      <Wrapper as={Container}>
        <ImageWrapper>
          <Image src={image} alt={text1} width="100%"  height="100%" loading="lazy" />
        </ImageWrapper>
        <TextWrapper>
          We are Famous For <Text1>{text1}</Text1>, {text2}
        </TextWrapper>
      </Wrapper>
      <ArrowWrapper>
        <DownArrow ScrollToItems={ScrollToItems} />
      </ArrowWrapper>
    </Background>
  );
};


export default Famous;
