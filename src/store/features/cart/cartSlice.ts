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
      //это мутабельный экшн (т.к. push меняет-доб-ет)
      // state.products.push({ id: 1, name: "Book for IT" });
      state.products.push(payload);
    }, //пушим тот объект, кот хочу купить
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

//это запуск ф-ции,
//  выз ф-ю эдкарт в hompage

// здесь хр-ся данные (как контекст)
// переходим в store.ts и в редусер вносим нашкусочек корзины

// addToCart: (state) => {},  //это ф-и экшины, именно они делают логику,
// всегда в кач-ве арг-та принимают state (это наш  initialState), это стэйт
// именно того слайса, в кот мы нах-ся (т.е. корзины)

// Redux Toolkit createReducerи createSliceавтоматически использовать
// Immer внутри, чтобы вы могли писать более простую неизменяемую
// логику обновления, используя «мутирующий» синтаксис. Это помогает
//  упростить большинство реализаций редукторов.
