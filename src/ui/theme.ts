import { css } from "styled-components";
import { Color } from "ui";

export const lightTheme = css`
  --primary-text: ${Color.Primary};
  --primary-bg: ${Color.White};
  --secondary-bg: ${Color.Primary_grey};
  --search-bg: ${Color.White};
`;
export const darkTheme = css`
  --primary-text: ${Color.White};
  --primary-bg: ${Color.Primary_grey};
  --secondary-bg: ${Color.White};
  --search-bg: ${Color.Secondary_lightGrey};
`;
