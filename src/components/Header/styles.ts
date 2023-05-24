import styled from "styled-components";
import { Color } from "ui";

const StyledHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 23px 0px;
  border-bottom: 1px solid ${Color.Grey};
`;
const HeaderLogo = styled.div`
  width: 137px;
  height: 29px;
  cursor: pointer;
`;
const HeaderNavigate = styled.div`
  display: flex;
  gap: 46px;
  padding: 16px;
`;
export { StyledHeader, HeaderLogo, HeaderNavigate };
