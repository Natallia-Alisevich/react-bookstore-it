import { CartItem } from "components/CartItem/CartItem";
import { StyledList } from "./styles";
import { BookInfo } from "types";

interface CartListProps {
    bookItems: BookInfo[];
}

export const CartList = ({ bookItems }: CartListProps) => {
    return (
        <StyledList>
            {bookItems.map((item) => {
                return <CartItem key={item.isbn13} product={item} />;
            })}
        </StyledList>
    );
};