import { createSlice } from "@reduxjs/toolkit";

interface NewBooksState {
  books: any[];
  error: number;
  total: string;
}

const initialState: NewBooksState = {
  books: [],
  error: 200,
  total: "",
};

const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {
    newInfo: (state) => {
      console.log("ok");
    },
  },
});

export default newBooksSlice.reducer;

export const { newInfo } = newBooksSlice.actions; //выз ф-ю эдкарт в hompage
// export const { addToCart } = cartSlice.actions; //выз ф-ю эдкарт в hompage

// здесь хр-ся данные (как контекст)
// переходим в store.ts и в редусер вносим нашкусочек корзины

// addToCart: (state) => {},  //это ф-и экшины, именно они делают логику,
// всегда в кач-ве арг-та принимают state (это наш  initialState), это стэйт
// именно того слайса, в кот мы нах-ся (т.е. корзины)

// Redux Toolkit createReducerи createSliceавтоматически использовать
// Immer внутри, чтобы вы могли писать более простую неизменяемую
// логику обновления, используя «мутирующий» синтаксис. Это помогает
//  упростить большинство реализаций редукторов.

// слайсы сделать: аккаунте, дитэйлс, корзина, с новыми книгами, с избранными