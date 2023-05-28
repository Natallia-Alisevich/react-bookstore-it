import styled from "styled-components";
import { Color } from "ui";
import { BodyText1 } from "ui/typography";
import { SearchIconInput } from "assets";

const StyledForm = styled.form`
  display: flex;
  position: relative;
  padding: 0 20px;
`;

const StyledInput = styled.input`
  width: 542px;
  /* width: 95%; */
  ${BodyText1}
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  padding: 14px 20px;
  ::placeholder {
    color: ${Color.Secondary_lightGrey};
  }
`;
const SearchIcon = styled(SearchIconInput)`
  position: absolute;
  right: 25%;
  bottom: 30%;
  & path {
    fill: ${Color.Secondary_lightGrey};
  }
  &:hover {
    cursor: pointer;
  }
`;
const StyledButton = styled.button`
  display: flex;
  width: 20%;
  padding: 14px 40px;
  border: none;
  border-radius: 5px;
  ${BodyText1}
  color: ${Color.Secondary_lightGrey};
  justify-content: center;
`;

export { StyledForm, StyledInput, SearchIcon, StyledButton };
