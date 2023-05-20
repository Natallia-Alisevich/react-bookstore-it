import { useDebounce } from "./hooks/useDebounce";
import { useToggle } from "./hooks/useToggle";
import { store, RootState, AppDispatch } from "./store";
import { addToCart, clearCart } from "./features/cart/cartSlice";
import { selectCart } from "./selectors/cartSelector";
import { selectNewBook } from "./selectors/newBookSelector";

export { useDebounce, useToggle, store, addToCart, clearCart, selectCart, selectNewBook };
export type { RootState, AppDispatch };
