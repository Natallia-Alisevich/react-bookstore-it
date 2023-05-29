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







// import { BookList, FormSubscribe, Spinner } from "components";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ROUTE } from "routes";
// import {
//   addToCart, clearCart, fetchNewBooks, selectCart,
//   selectNewBook
// } from "store";
// import { useAppDispatch, useAppSelector } from "store/hooks/hooks";


// export const CartPage = () => {
//   // const { books } = useAppSelector(selectSearch);
//   const { isLoading, books, error } = useAppSelector(selectNewBook);

//   // const [newBooks, setNewBooks] = useState<NewInfo>({
//   //   error: "0",
//   //   total: "20",
//   //   books: [],
//   // });

//   const dispatch = useAppDispatch();//!!!только с пом диспатч
//   // // м вызывать изм-я стора любое действие на UI, которое изм-ет
//   // стор д сод-ть ф-ю диспатч

//   // console.log("books:", books);
//   // const { products } = useAppSelector((state) => state.cart)//state-это весь наш store.
//   //  Мы ставим "." и берем у стора ключ cart (state.cart)
//   // для useAppSelector надо написать селектор =>
//   const { products } = useAppSelector(selectCart);

//   // useSelector-это хук предост доступ к стору, т.е. тогда мы данные из стора
//   // (данные наших слайсов) сможем отобразить. Этот хук в кач аргум
//   //  принимает 1. ф-цию (она позволит нам достать ключи из стэйта)
//   // 2арг-т. нам не нужен сейчас
//   const handleAddToCart = () => {
//     dispatch(addToCart({
//       title: "IT Books",
//       subtitle: "IT Books",
//       isbn13: "jkjj",
//       price: "37",
//       image: "",
//       url: "",

//     }));
//   }; //это наш хэндлер, внутри кот выз ф-ю диспатч
//   const handleClearToCart = () => {
//     dispatch(clearCart());
//   };


//   useEffect(() => {
//     dispatch(fetchNewBooks());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Your cart</h1>
//       <button onClick={handleAddToCart}>add to cart</button>
//       <button onClick={handleClearToCart}>clear cart</button>
//       <h1>New Releases Books</h1>
//       <Link to={ROUTE.FAVORITE}>Go to favorite</Link>
//       <Link to={ROUTE.SEARCH}>Go to Search</Link>
//       <Link to={ROUTE.DETAILS}>Go to details</Link>
//       <Link to={ROUTE.RESETPASSWORD}>Go to Reset Password</Link>
//       <Link to={ROUTE.SIGNUP}>Go to Sign up</Link>
//       {isLoading && <Spinner />}
//       {error && <div>{error}</div>}
//       {books?.length > 0 && < BookList books={books} />}
//       <FormSubscribe />
//     </div>
//   );
// };



// { isLoading && (<Spinner />) }//е загрузка, то отобр спиннер
// books?.length -е у нас есть books и их дл >0, то отобр список книг

//!!!  на стр поиска, дитэйлс, карт, аккаунт тоже асинхр код
