import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AsyncLocalStorage } from "async_hooks";
import axios, { AxiosError } from "axios";
import { SearchInfo } from "types";

interface SearchState extends SearchInfo {
  isLoading: boolean;
}

interface OptionProps {
  title: string | undefined;
}

const initialState: SearchState = {
  error: null,
  total: "",
  page: "1",
  books: [],
  isLoading: false,
};

export const fetchSearchBooks = createAsyncThunk<
  SearchInfo,
  string | undefined,
  { rejectValue: string }
>("search/fetchSearchBooks", async (search, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://api.itbook.store/1.0/search/${search}`);
    return data;
  } catch (error) {
    const someErrorMessage = error as AxiosError;
    return rejectWithValue(someErrorMessage.message);
  }
});
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload.books;
      state.total = payload.total;
    });
    builder.addCase(fetchSearchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;
