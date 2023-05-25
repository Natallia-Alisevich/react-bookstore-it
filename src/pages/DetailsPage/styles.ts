import styled from "styled-components";
import { Color } from "ui";
import { Media } from "ui/media";
import { BodyText1, BodyText2, Head1, Head2, Head3, SubText } from "ui/typography";

const DetailsTitle = styled.p`
  ${Head1}margin-bottom: 48px;
  ${Media.sm} {
    margin-bottom: 36px;
  }
`;
const DetailsCard = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
  ${Media.md} {
    flex-wrap: wrap;
    margin-bottom: 49px;
  }
`;

const DetailsBookBg = styled.div`
  display: flex;
  width: 45%;
  justify-content: center;
  background-color: ${Color.Green};
  ${Media.md} {
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 89px;
  }
`;
const DetailsCardInfo = styled.div`
  width: 45%;
  padding: 0px 30px;
  border-top: 1px solid ${Color.Secondary_lightGrey};
  ${Media.md} {
    width: 100%;
    flex-wrap: wrap;
  }
`;
const DetailsInfoHead = styled.div`
  display: flex;
  padding-top: 40px;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const DetailsPrice = styled.div`
  ${Head2}
`;
const InfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  ${BodyText1};
  color: ${Color.Secondary_lightGrey};
  & > :last-child {
    color: ${Color.Primary};
  }
`;
const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 59px;
  background-color: ${Color.Primary};
  ${Head3};
  color: ${Color.White};
`;

const DetailsPreview = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  ${Media.md} {
    /* margin-bottom: auto; */
    /* width: 100%;
    flex-wrap: wrap;
    margin-bottom: 89px; */
  }
`;
const DetailsDescr = styled.div`
  ${BodyText1}/* ${Media.md} {
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 89px;
  } */
`;
export {
  DetailsTitle,
  DetailsCard,
  DetailsPrice,
  DetailsInfoHead,
  DetailsCardInfo,
  DetailsBookBg,
  InfoWrap,
  StyledButton,
  DetailsPreview,
  DetailsDescr,
};
