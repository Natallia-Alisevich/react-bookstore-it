import styled from "styled-components";
import { Color } from "ui";
import { BodySubText } from "ui/typography";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 33px 0;
  border-top: 1px solid ${Color.Secondary_lightGrey};
`;

export { StyledFooter };

const FooterBlock = styled.footer``;

const FooterInfo = styled.p`
  ${BodySubText}
  font-style: normal;
`;
export { FooterBlock, FooterInfo };
