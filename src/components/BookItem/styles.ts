import styled from "styled-components";
import { Color } from "ui";
import { BodySubText, Head3, SubText } from "ui/typography";

const BookCard = styled.div`
  display: grid;
  width: 100%;
  /* gap: 20px; */
  max-width: 352px;
  /* height: 277px; */
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transition: 0.5s solid;
    border: 5px solid ${Color.Orange};
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
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const BookPrice = styled.p`
  ${Head3};
`;

const Rate = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 6px;
  padding: 2px 8px;
  ${BodySubText};
  color: ${Color.Primary};
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
  Rate,
};
