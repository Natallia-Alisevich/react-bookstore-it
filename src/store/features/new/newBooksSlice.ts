import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { NewInfo } from "types/types";

interface NewBooksState extends NewInfo {
  isLoading: boolean;
}

const initialState: NewBooksState = {
  books: [],
  error: null,
  total: "",
  isLoading: false,
};

export const fetchNewBooks = createAsyncThunk<NewInfo, undefined, { rejectValue: string }>(
  "newBook/fetchNewBooks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://api.itbook.store/1.0/new");
      return data;
    } catch (error) {
      const someErrorMessage = error as AxiosError;
      return rejectWithValue(someErrorMessage.message);
    }
  },
);

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
