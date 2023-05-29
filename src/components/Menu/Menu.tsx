import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { StyledNav } from "./styles";
import { useAppDispatch } from "store/hooks/hooks";
import { CartIcon, HeartIcon, PersonIcon, SignInIcon } from "assets";
import { FormSearch } from "components";

interface MenuProps {
    isOpen: boolean;
    isMobile: boolean;
    handleClose: () => void;
}

const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
    idle: {},
};

export const Menu = ({ isOpen, isMobile, handleClose }: MenuProps) => {
    const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";

    return (

        <StyledNav animate={currentVariant} variants={menuVariants} initial="idle">
            <FormSearch />
            <Link to={ROUTE.FAVORITE}>
                <HeartIcon />
            </Link>
            <Link to={ROUTE.HOME} onClick={handleClose}>

            </Link>
            <Link to={ROUTE.CART} onClick={handleClose}>
                <CartIcon />
            </Link>
            <Link to={ROUTE.ACCOUNT} onClick={handleClose}>
                <PersonIcon />
            </Link>
            <Link to={ROUTE.SIGNIN} onClick={handleClose}>
                <SignInIcon />
            </Link>
        </StyledNav>
    );
};
