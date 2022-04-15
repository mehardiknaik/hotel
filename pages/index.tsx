import type { NextPage } from "next";
import { useEffect } from "react";
import Famous from "../src/components/Famous/Famous";
import Items from "../src/components/Items/Items";
import Seo from "../src/components/Seo/Seo";
import { useTheme } from "../src/providers/ThemeProviders";
import { GlobalStyle } from "../styles/global";

const Home: NextPage = () => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle theme={theme} />
      <Seo />
      <Famous />
      <Items />
    </>
  );
};

export default Home;
