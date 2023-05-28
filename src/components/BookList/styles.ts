import styled from "styled-components";
import { Color } from "ui";
import { Media } from "ui/media";

const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 390px));
  /* justify-content: center; */
  justify-content: space-between;
  grid-gap: 16px;
  padding-bottom: 73px;
  border-bottom: 1px solid ${Color.Grey};

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
  ${Media.xxl} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 350px));
    /* justify-content: center; */
  }
  ${Media.xl} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 280px));
    /* justify-content: center; */
  }
  ${Media.lg} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 370px));
    justify-content: center;
  }
  ${Media.md} {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`;

export { BooksWrapper };
