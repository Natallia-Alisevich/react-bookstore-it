import styled from "styled-components";
import { Color } from "ui";

const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 32px;
  margin: 48px 0 72px;
  list-style-type: none;
  /* border-bottom: 1px solid ${Color.Grey}; */
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

export { BooksWrapper };
