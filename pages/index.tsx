import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Famous from "../src/components/Famous/Famous";
import Items from "../src/components/Items/Items";
import Seo from "../src/components/Seo/Seo";
import { GlobalStyle } from "../styles/global";

const Home: NextPage = () => {
  const [theme, settheme] = useState("light");

  function appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  }

  useEffect(() => {
    appHeight();
  }, []);

  useEffect(() => {
    console.log("type");
    setTimeout(() => {
      settheme("dark");
    }, 2000);
  }, []);
  return (
    <>
      <Seo />
      <GlobalStyle theme={theme} />
      <Famous />
      <Items />
    </>
  );
};

export default Home;
