import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
:root{
    --textprimary:${({ theme }) => theme == 'dark' ? "#dcdcdc" : "#353535"};
    --backgroundprimary:${({ theme }) => theme == 'light' ? "#dcdcdc" : "#353535"};
}
body {
    background:var(--backgroundprimary)
}

`