import styled from "styled-components";
import { Color } from "ui";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  align-items: center;
  padding: 20px;
  background-color: ${Color.Orange};
`;

export { StyledForm };
