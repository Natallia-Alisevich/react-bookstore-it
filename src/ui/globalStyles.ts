import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { Color } from "./colors";
import { Head1 } from "./typography";

export const GlobalStyles = createGlobalStyle`
${reset};
body{
  font-family: "Helios Antique", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Color.Primary};
  background-color: ${Color.White};
}
h1{
  ${Head1}
}
`;
