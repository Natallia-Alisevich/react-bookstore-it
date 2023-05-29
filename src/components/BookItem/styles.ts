import styled from "styled-components";
import { Color } from "ui";
import { Media } from "ui/media";
import { BodySubText, Head3, SubText } from "ui/typography";

const BookCard = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    transition: 0.5s solid;
    outline: 5px solid ${Color.Orange};
  }
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
