import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
:root{
    --backgroundprimary:${({ theme }) => theme == 'light' ? "#dcdcdc" : "#353535"};
    --backgroundsecondary:${({ theme }) => theme == 'light' ? "#f8c7ff" : "#300037"};
    --textprimary:${({ theme }) => theme == 'light' ?  "#353535":"#dcdcdc"};
}
body {
    background:var(--backgroundprimary)
}

`