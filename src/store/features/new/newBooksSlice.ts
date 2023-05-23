import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { rejects } from "assert";
import axios, { AxiosError } from "axios";
import { BooksInfo } from "types";
import { NewInfo } from "types/types";

interface NewBooksState extends NewInfo {
  isLoading: boolean;
}

const initialState: NewBooksState = {
  books: [],
  error: "200",
  total: "",
  isLoading: false,
};

export const fetchNewBooks = createAsyncThunk<NewInfo, undefined, { rejectValue: string }>(
  "newBook/fetchNewBooks",
  async (newBook) => {
    try {
      const { data } = await axios.get("https://api.itbook.store/1.0/new");
      return data;
    } catch (error) {
      const someErrorMessage = error as AxiosError;
      return isRejectedWithValue(someErrorMessage.message);
    }
  },
);

//  extraReducers; для асинхр кода:
const newBooksSlice = createSlice({
  name: "newBooks",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNewBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNewBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload.books;
      state.total = payload.total;
    });
    builder.addCase(fetchNewBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default newBooksSlice.reducer;

// говорим билдеру: добавь кейс, когда ты б работать с экшином (fetchNewBooks) у него
// еще б сост-е pending (отправка) на основе промиса. З! addCase при наведении напоминает передать
// reducer (ф-я,кот принимает 1 арг-м всегда state)

//!!! Это для неасинхрон кода, а выше д асинхр кода с пом библ axios:
// import { createSlice } from "@reduxjs/toolkit";

// interface NewBooksState {
//   books: any[];
//   error: number;
//   total: string;
// }

// const initialState: NewBooksState = {
//   books: [],
//   error: 200,
//   total: "",
// };

// const newBooksSlice = createSlice({
//   name: "newBooks",
//   initialState,
//   reducers: {
//     newInfo: (state) => {
//       console.log("ok");
//     },
//   },
// });

// export default newBooksSlice.reducer;

// export const { newInfo } = newBooksSlice.actions; //выз ф-ю эдкарт в hompage

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
