import { css } from "styled-components";

export const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  button,
  input[type="button"] {
    width: auto;
    overflow: visible;
  }

  img {
    max-width: 100%;
    display: block;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  ul,
  ol {
    list-style: none;
  }
  li,
  ol {
    padding: 0;
  }
  button {
    padding: 0;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
`;
