import React from "react";
import { HeaderLogo, HeaderNavigate, StyledHeader } from "./styles";
import { Link } from "react-router-dom";
import { BookstoreIcon, HeartIcon, CartIcon, PersonIcon } from "assets";
import { ROUTE } from "routes";
import { Burger, FormSearch, Spinner } from "components";
import { useToggle } from "store";
import { Menu } from "components/Menu/Menu";
import { useWindowSize } from "store/hooks/useWindowSize";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isTablet = width < 1200;
  return (
    <StyledHeader>
      <Link to="/">
        <HeaderLogo>
          < BookstoreIcon />
        </HeaderLogo>
      </Link>

      <HeaderNavigate>

        <Menu isOpen={isMenuOpen} isMobile={isTablet} handleClose={toggleMenu} />
        {isTablet && <Burger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
      </HeaderNavigate>
    </StyledHeader>
  );
};

