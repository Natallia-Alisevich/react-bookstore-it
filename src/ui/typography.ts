import { css } from "styled-components";
import { Color } from "ui";
import { Media } from "./media";

const Head1 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  color: ${Color.Primary};
  font-size: 56px;
  line-height: 64px;

  ${Media.sm} {
    font-size: 32px;
    line-height: 44px;
  }
`;
const SubText = css`
  font-family: "Helios Antique", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Secondary_lightGrey};
`;
const Head2 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${Color.Primary};

  ${Media.sm} {
    font-size: 28px;
    line-height: 40px;
  }
`;
const Head3 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-decoration: none;
  color: ${Color.Primary};
`;
const Sub1 = css`
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: ${Color.Primary};
`;

const BodyHead1 = css`
  font-family: "Helios Antique", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Primary};
`;
const BodyText1 = css`
  font-family: "Helios Antique", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Color.Primary};
`;
const BodySubText = css`
  font-family: "Helios Antique", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 26px;
  color: ${Color.Secondary_lightGrey};
`;
const BodyHead2 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${Color.Primary};
`;
const BodyText2 = css`
  font-family: "Helios Antique", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.Primary};
`;

export {
  Head1,
  SubText,
  Head2,
  Head3,
  Sub1,
  BodyHead1,
  BodyText1,
  BodySubText,
  BodyHead2,
  BodyText2,
};
