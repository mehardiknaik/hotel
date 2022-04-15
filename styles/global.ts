import { createGlobalStyle } from "styled-components";

const light = `{
    --backgroundprimary:#dcdcdc;
    --backgroundsecondary:#f8c7ff;
    --textprimary:#353535;
    --textheighlight:#b8b400;
}`;

const dark = `{
    --backgroundprimary:#212121;
    --backgroundsecondary:#300037;
    --textprimary:#dcdcdc;
    --textheighlight:#ffec8f;
}`;

export const GlobalStyle = createGlobalStyle`
:root${({ theme }) => (theme == "light" ? light : dark)}
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background:var(--backgroundprimary);
    color: var(--textprimary);
}
a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;
