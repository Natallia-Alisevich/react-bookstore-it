import { useDebounce } from "./hooks/useDebounce";
import { useToggle } from "./hooks/useToggle";
import { store, RootState, AppDispatch } from "./store";
import { addToCart, clearCart, removeProduct } from "./features/cart/cartSlice";
import { fetchSearchBooks } from "./features/search/searchSlice";
import { fetchNewBooks } from "./features/new/newBooksSlice";
import { selectCart } from "./selectors/cartSelector";
import { selectNewBook } from "./selectors/newBookSelector";
import newBooksReducer from "./features/new/newBooksSlice";
import cartReducer from "./features/cart/cartSlice";
import searchBooksReducer from "./features/search/searchSlice";
import favoriteBooksReducer from "./features/favorite/favoriteBooksSlice";
import userReducer, { fetchSignUpUser } from "./features/user/userSlice";

export {
  useDebounce,
  useToggle,
  store,
  addToCart,
  clearCart,
  removeProduct,
  fetchSearchBooks,
  fetchNewBooks,
  selectCart,
  selectNewBook,
  newBooksReducer,
  cartReducer,
  searchBooksReducer,
  favoriteBooksReducer,
  userReducer,
  fetchSignUpUser,
};
export type { RootState, AppDispatch };
