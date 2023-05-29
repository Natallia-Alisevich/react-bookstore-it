import React from "react";
import { BurgerIcon, StyledButton } from "./styles";
import { color } from "framer-motion";

interface BurgerMenuProps {
    toggleMenu: () => void;
    isMenuOpen: boolean;
}

export const Burger = ({ toggleMenu, isMenuOpen }: BurgerMenuProps) => {
    return <StyledButton onClick={toggleMenu}>
        {isMenuOpen ? <span style={{ color: "#A8A8A8" }}>x</span> : < BurgerIcon />}</StyledButton>;
};