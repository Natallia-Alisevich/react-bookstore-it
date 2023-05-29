import { BurgerOpenIcon } from "assets";
import styled from "styled-components";
import { Color } from "ui";

const StyledButton = styled.button`
  font-size: 2rem;
  background-color: transparent;
  border: none;
  padding: 1rem;
`;

const BurgerIcon = styled(BurgerOpenIcon)`
  & path {
    stroke: ${Color.Secondary_lightGrey};
  }
`;

export { StyledButton, BurgerIcon };
