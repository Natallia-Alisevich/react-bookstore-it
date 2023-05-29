import styled from "styled-components";
import { Color } from "ui";
import { Head3 } from "ui/typography";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin: 108px auto;
  width: 70%;
  max-width: 800px;
  align-items: center;
  padding: 20px;
  background-color: ${Color.Orange};
  &:hover {
    background-color: ${Color.Green};
    transition: 2px;
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

export { StyledForm, StyledButton };
