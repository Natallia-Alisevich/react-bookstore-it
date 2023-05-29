import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

const StyledNav = styled(motion.nav)`
  display: flex;
  gap: 2rem;

  @media (max-width: 1105px) {
    position: absolute;
    top: 21%;
    right: 0;
    z-index: 10;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 20vw;
    height: calc(50vh);
    background-color: ${Color.Green};
    transform: translateX(-100%);
  }
`;
export { StyledNav };
