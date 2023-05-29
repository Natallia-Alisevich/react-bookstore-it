import styled from "styled-components";
import { Color } from "ui";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 48px 0;
  & > :nth-child(n + 5) > :nth-child(1) {
    background-color: ${Color.Green};
  }
  & > :nth-child(2n) > :nth-child(1) {
    background-color: ${Color.Orange};
  }
  & > :nth-child(3n) > :nth-child(1) {
    background-color: ${Color.Blue};
  }
  & > :nth-child(3n + 1) > :nth-child(1) {
    background-color: ${Color.Purple};
  }
`;

export { StyledList };
