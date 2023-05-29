import { ROUTE } from "routes";
import { clearCart, removeProduct, selectCart } from "store";
import { StyledButton } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { CartList } from "components/CartList/CartList";
import { TotalCost } from "components/TotalCost/TotalCost";
import { addToCart } from "store/features/cart/cartSlice";

export const CartPage = () => {
  const { products, totalCost } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      title: "IT Books",
      subtitle: "IT Books",
      isbn13: "jkjj",
      price: "37",
      image: "",
      url: "",

    }))
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveBook = () => {
    dispatch(removeProduct({}));
  };

  return (
    <>
      {products.length < 1 ? (
        "корзина пуста"
      ) : (
        <>
          <h1>Your cart</h1>
          <CartList bookItems={[]} />
          <TotalCost totalCost={totalCost} />
          <StyledButton onClick={handleAddToCart}>Add to cart</StyledButton>
          <StyledButton onClick={handleClearCart}>Clear</StyledButton>
          <StyledButton onClick={handleRemoveBook}>Remove book</StyledButton>
        </>
      )}
    </>
  );
};
