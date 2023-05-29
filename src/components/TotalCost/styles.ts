import styled from "styled-components";
import { Head2, SubText } from "ui/typography";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Total = styled.p`
  ${Head2}
`;
const Sum = styled.p`
  ${SubText}
`;

export { Sum, Total, Wrapper };
