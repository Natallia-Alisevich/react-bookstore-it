import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
  products: any;
  totalCost: number;
}

const initialState: CartState = {
  products: [],
  totalCost: 200,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<{ id: number; name: string }>) => {
      //это мутабельный экшн (т.к. push меняет-доб-ет)
      // state.products.push({ id: 1, name: "Book for IT" });
      state.products.push(payload);
    }, //пушим тот объект, кот хочу купить
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, clearCart } = cartSlice.actions; //это запуск ф-ции,
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
