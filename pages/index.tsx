import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import Famous from "../src/components/Famous/Famous";
import Items from "../src/components/Items/Items";
import Seo from "../src/components/Seo/Seo";
import { useTheme } from "../src/providers/ThemeProviders";
import { GlobalStyle } from "../styles/global";

const Home: NextPage = (props:any) => {
  const { theme } = useTheme();
  console.log(props.data);
  return (
    <>
      <GlobalStyle theme={theme} />
      <Seo />
      <Famous />
      <Items />
    </>
  );
};


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Home;
