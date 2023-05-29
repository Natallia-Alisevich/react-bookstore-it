import styled from "styled-components";
import { Color } from "ui";
import { BodyText1 } from "ui/typography";
import { SearchIconInput } from "assets";
import { Media } from "ui/media";

const StyledForm = styled.form`
  display: flex;
  position: relative;
  padding: 0 20px;
  ${Media.xl} {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
`;

const StyledInput = styled.input`
  width: 542px;
  ${BodyText1}
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  padding: 14px 20px;
  ::placeholder {
    color: ${Color.Secondary_lightGrey};
  }
  ${Media.xl} {
    width: 100%;
    top: 0;
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
  ${Media.xl} {
    display: none;
    /* right: 25%;
    bottom: 65%; */
  }
  ${Media.lg} {
    display: block;
    right: 25%;
    bottom: 65%;
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

  ${Media.xl} {
    justify-content: center;
    width: 15%;
    margin: 0 auto;
  }
`;

export { StyledForm, StyledInput, SearchIcon, StyledButton };
