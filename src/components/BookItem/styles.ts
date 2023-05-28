import styled from "styled-components";
import { Color } from "ui";
import { Media } from "ui/media";
import { BodySubText, Head3, SubText } from "ui/typography";

const BookCard = styled.div`
  display: flex;
  /* display: grid; */
  gap: 20px;
  /* width: 100%;
  max-width: 342px; */
  flex-direction: column;
  cursor: pointer;
  &:hover {
    transition: 0.5s solid;
    outline: 5px solid ${Color.Orange};
  }
  /* ${Media.xxl} {
    max-width: 250px;
    max-height: 379px;
  }
  /* ${Media.xl} {
    max-width: 275px;
    max-height: 379px;
  } */
  /* ${Media.lg} {
    max-width: 100%;
    max-height: 379px;
  } */
  /* ${Media.md} {
    max-width: 220px;
  } 
  ${Media.sm} {
    max-width: 100%;
    min-height: 255px;
    margin: auto;  */
  /* }  */
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 264px;
`;
const StyledCardImg = styled.img`
  max-width: 226px;
`;
const BookInfoWrapper = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  padding: 8px;
`;

const StyledTitle = styled.p`
  ${Head3}
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const BookAuth = styled.p`
  ${SubText};
  font-style: normal;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const BookPrice = styled.p`
  ${Head3};
`;
const WrapPrice = styled.p`
  display: flex;
  justify-content: space-between;
`;

export {
  BookCard,
  StyledCardImg,
  ImageWrapper,
  BookInfoWrapper,
  StyledTitle,
  SubText,
  BookAuth,
  BookPrice,
  WrapPrice,
};
