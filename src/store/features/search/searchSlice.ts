import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncLocalStorage } from "async_hooks";
import axios, { AxiosError } from "axios";
import { SearchInfo } from "types";

interface SearchState extends SearchInfo {
  isLoading: boolean;
}

const initialState: SearchState = {
  error: null,
  total: "",
  page: "1",
  books: [],
  isLoading: false,
};

// // для асинхр actions нужна ф-я createAsyncThunk, ф-я генерирует
// // экшины на основе жиз циклов промисов:
export const fetchSearchBooks = createAsyncThunk<SearchInfo, string, { rejectValue: string }>(
  "searchBooks/fetchSearchBooks",
  async (searchBook, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.itbook.store/1.0/search/${searchBook}`);
      return data;
    } catch (error) {
      const someErrorMessage = error as AxiosError;
      return rejectWithValue(someErrorMessage.message);
    }
  },
);
const SearchSlice = createSlice({
  name: "searchBooks",
  initialState,
  reducers: {
    newInfo: (state) => {
      console.log("ok");
    },
  },
});

export default SearchSlice.reducer;

export const { newInfo } = SearchSlice.actions; //выз ф-ю эдкарт в hompage

// отличия createAsyncThunk:
// createAsyncThunk нах вне нашего слайса, она объявл не в редусерах, а отдельно
//  и по оконч-ю своего вып-я она возв-ет нам action fetchSearchBooks, кот помещаем внутрь диспатча
// ф-я д сгенер-ть имя typePrefix (это 1 арг), оно всегда склеивается
//  ч-з "/" :1. имя слайса/имя экшина, возвр-го ф-ей createAsyncThunk
// 2 обяз арг-это фсинхр ф-я

// переходим в store.ts и в редусер вносим нашкусочек search

// слайсы сделать: аккаунте, дитэйлс, корзина, с новыми книгами, с избранными
