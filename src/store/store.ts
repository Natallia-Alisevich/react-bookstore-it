import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import newBooksReducer from "./features/new/newBooksSlice";
import searchBooksReducer from "./features/search/searchSlice";
import favoriteBooksReducer from "./features/favorite/favoriteBooksSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    newBooks: newBooksReducer,
    search: searchBooksReducer,
    favoriteBooks: favoriteBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
