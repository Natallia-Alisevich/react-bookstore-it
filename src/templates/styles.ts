import styled from "styled-components";
// import { tokens } from "ui";
// const { layout } = tokens;

const MainContainer = styled.div`
  margin: 40px;
`;
// const MainContainer = styled.div`
//   margin: 32px 24px 48px;
//   ${layout.media.smallTablet} {
//     margin: 32px auto 48px;
//     width: 528px;
//   }
//   ${layout.media.tablet} {
//     margin: 40px auto 56px;
//     width: 688px;
//   }
//   ${layout.media.largeTablet} {
//     width: 928px;
//   }
//   ${layout.media.desktop} {
//     width: 1184px;
//   }
//   ${layout.media.largeDesktop} {
//     margin: 40px auto 64px;
//     width: 1796px;
//   }
// `;
const Container = styled.div`
  display: flex;
`;
export { MainContainer, Container };
