import React, { useEffect, useState } from "react";
import { Container } from "../../../styles/container";
import { FooterData } from "../../data/FooterData";
import { Credit, FooterContainer, Wrapper } from "./styled";

const Footer = () => {
  const [data, setData] = useState([]);

  const DataHandle = () => {
    let newData: any = FooterData.map((a) => Object.entries(a)[0]);
    console.log(newData);
    setData(newData);
  };
  useEffect(() => {
    DataHandle();
  }, []);
  return (
    <Wrapper>
      <Container>
        <FooterContainer>
          {data.map((element) => (
            <>
              <div>{element[0]}</div>
              <div>{element[1]}</div>
            </>
          ))}
        </FooterContainer>
        <Credit>Made with ❤ by Hardik</Credit>
      </Container>
    </Wrapper>
  );
};

export default Footer;
