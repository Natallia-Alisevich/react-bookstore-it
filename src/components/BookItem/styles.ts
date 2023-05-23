import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";
import { BodySubText, Head3, SubText } from "ui/typography";

const BookCard = styled.div`
  display: grid;
  width: 100%;
  gap: 20px;
  max-width: 352px;
  /* flex-direction: column; */
  cursor: pointer;

  &:hover {
    transition: 0.5s double;
    border: 5px double ${Color.Orange};
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const StyledCardImg = styled.img`
  max-width: 226px;
`;
const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled.p`
  ${Head3}
`;
const BookAuth = styled.p`
  ${SubText}
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
  BookInfo,
  StyledTitle,
  SubText,
  BookAuth,
  BookPrice,
  Rate,
};
