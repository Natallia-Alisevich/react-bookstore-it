import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BooksInfo } from "types";

interface CartState {
  products: BooksInfo[];
  totalCost: number;
  amount: number;
  isLoading: boolean;
}

const initialState: CartState = {
  products: [],
  totalCost: 0,
  amount: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<BooksInfo>) => {
      state.products.push(payload);
    },
    clearCart: (state) => {
      state.products = [];
    },
    removeProduct: (state, { payload }) => {
      const bookIsbn = payload;
      state.products = state.products.filter((product) => product.isbn13 !== bookIsbn);
    },
    countAllSum: (state) => {
      let total = 0;
      state.products.forEach((product) => {
        total += +product.price.substring(1);
      });
      state.totalCost = total;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, clearCart, removeProduct, countAllSum } = cartSlice.actions;
