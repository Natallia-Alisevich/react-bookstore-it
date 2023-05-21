import { BookList } from "components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { addToCart, clearCart, fetchSearchBooks, selectCart } from "store";
// import { fetchSearchBooks } from "store/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { selectSearch } from "store/selectors/searchSelector";
import { BookInfo, BookStore } from "types";
import { NewInfo } from "types/types";

export const HomePage = () => {
  const { books } = useAppSelector(selectSearch);

  const [newBooks, setNewBooks] = useState<NewInfo>({
    error: "0",
    total: "20",
    books: [],
  });

  const dispatch = useAppDispatch();//!!!только с пом диспатч 
  // // м вызывать изм-я стора любое действие на UI, которое изм-ет 
  // стор д сод-ть ф-ю диспатч

  // console.log("books:", books);
  // const { products } = useAppSelector((state) => state.cart)//state-это весь наш store.
  //  Мы ставим "." и берем у стора ключ cart (state.cart)
  // для useAppSelector надо написать селектор =>
  const { products } = useAppSelector(selectCart);

  // useSelector-это хук предост доступ к стору, т.е. тогда мы данные из стора
  // (данные наших слайсов) сможем отобразить. Этот хук в кач аргум
  //  принимает 1. ф-цию (она позволит нам достать ключи из стэйта)
  // 2арг-т. нам не нужен сейчас
  const handleAddToCart = () => {
    dispatch(addToCart({
      title: "IT Books",
      subtitle: "IT Books",
      isbn13: "jkjj",
      price: "37",
      image: "",
      url: "",

    }));
  }; //это наш хэндлер, внутри кот выз ф-ю диспатч
  const handleClearToCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((response) => response.json())
      // .then((response) => {console.log(response.books);});
      .then((response) => setNewBooks(response));
  }, []);

  // д асинхр экшинов исп axios, без fetch:
  // примонтаже н вызв изм-е стэйта -диспатч и в него передать экшн, с которым б работать
  useEffect(() => {
    // dispatch(fetchSearchBooks());
  }, [dispatch]);

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleAddToCart}>add to cart</button>
      <button onClick={handleClearToCart}>clear cart</button>
      {/* <div>{products}</div> */}
      {/* <ul>{products.map((product: any) => {
        return <li>{product}</li>
      })}</ul> */}
      <h1>New Releases Books</h1>
      <Link to={ROUTE.FAVORITE}>Go to favorite</Link>
      <Link to={ROUTE.SEARCH}>Go to Search</Link>
      <Link to={ROUTE.DETAILS}>Go to details</Link>
      <Link to={ROUTE.RESETPASSWORD}>Go to Reset Password</Link>
      <Link to={ROUTE.SIGNUP}>Go to Sign up</Link>

      <p> quis aspead tempora, perspiciatis dolores magnam?</p>
      <BookList newBooks={newBooks} />
    </div>
  );
};



