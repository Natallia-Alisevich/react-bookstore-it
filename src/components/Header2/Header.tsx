
import React from "react";
import { HeaderLogo, HeaderNavigate, StyledHeader } from "./styles";
import { Link } from "react-router-dom";
import { BookstoreIcon, HeartIcon, CartIcon, PersonIcon } from "assets";
import { ROUTE } from "routes";
import { FormSearch, Spinner } from "components";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <HeaderLogo>
          < BookstoreIcon />
        </HeaderLogo>
      </Link>
      {/* <input /> */}
      <FormSearch />
      <HeaderNavigate>
        <Link to={ROUTE.FAVORITE}>
          <HeartIcon />
        </Link>
        <Link to={ROUTE.CART}>
          <CartIcon />
        </Link>
        <Link to={ROUTE.ACCOUNT}>
          <PersonIcon />
        </Link>
      </HeaderNavigate>
    </StyledHeader>
  );
};