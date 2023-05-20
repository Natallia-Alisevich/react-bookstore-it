import { useDebounce } from "./hooks/useDebounce";
import { useToggle } from "./hooks/useToggle";
import { store, RootState, AppDispatch } from "./store";
import { addToCart, clearCart } from "./features/cart/cartSlice";
import { selectorCart } from "./selectors/cartSelector";
import { selectorNewBook } from "./selectors/newBookSelector";

export { useDebounce, useToggle, store, addToCart, clearCart, selectorCart, selectorNewBook };
export type { RootState, AppDispatch };
