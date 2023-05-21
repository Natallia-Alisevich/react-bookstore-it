import { useDebounce } from "./hooks/useDebounce";
import { useToggle } from "./hooks/useToggle";
import { store, RootState, AppDispatch } from "./store";
import { addToCart, clearCart } from "./features/cart/cartSlice";
import { fetchSearchBooks } from "./features/search/searchSlice";
import { selectCart } from "./selectors/cartSelector";
import { selectNewBook } from "./selectors/newBookSelector";

export {
  useDebounce,
  useToggle,
  store,
  addToCart,
  clearCart,
  fetchSearchBooks,
  selectCart,
  selectNewBook,
};
export type { RootState, AppDispatch };
