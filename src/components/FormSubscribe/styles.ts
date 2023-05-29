import styled from "styled-components";
import { Color } from "ui";
import { Media } from "ui/media";
import { Head2, Sub1 } from "ui/typography";

const StyledForm = styled.form`
  padding: 56px 64px;
  margin: 72px 0;
  background-color: ${Color.Purple};
`;
const Title = styled.h2`
  ${Head2}
`;
const Subtitle = styled.p`
  margin-bottom: 32px;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  color: ${Color.Secondary_lightGrey};
`;
const WrapValue = styled.h2`
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  width: 80%;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: none;
  padding: 15px 20px;
  ::placeholder {
    color: ${Color.Secondary_lightGrey};
  }
`;
const StyledButton = styled.button`
  display: flex;
  width: 20%;
  padding: 16px 40px;
  border: none;
  border-radius: 0px 2px 2px 0px;

  justify-content: center;
  background-color: ${Color.Primary};
  ${Sub1}
  color: ${Color.White};
`;

export { StyledForm, Title, Subtitle, WrapValue, StyledInput, StyledButton };
