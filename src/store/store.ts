import { configureStore } from "@reduxjs/toolkit";
import newBooksReducer from "./features/new/newBooksSlice";
import cartReducer from "./features/cart/cartSlice";
import searchBooksReducer from "./features/search/searchSlice";
import favoriteBooksReducer from "./features/favorite/favoriteBooksSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    newBooks: newBooksReducer,
    search: searchBooksReducer,
    user: userReducer,
    cart: cartReducer,
    favoriteBooks: favoriteBooksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
