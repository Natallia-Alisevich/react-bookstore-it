import { useDebounce } from "./hooks/useDebounce";
import { useToggle } from "./hooks/useToggle";
import { store, RootState, AppDispatch } from "./store";
import { addToCart, clearCart, removeProduct } from "./features/cart/cartSlice";
import { fetchSearchBooks } from "./features/search/searchSlice";
import { fetchNewBooks } from "./features/new/newBooksSlice";
import { selectCart } from "./selectors/cartSelector";
import { selectNewBook } from "./selectors/newBookSelector";

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
};
export type { RootState, AppDispatch };
