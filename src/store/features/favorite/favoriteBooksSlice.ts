import { createSlice } from "@reduxjs/toolkit";

interface FavoriteState {
  books: any[];
}

const initialState: FavoriteState = {
  books: [],
};

const favoriteSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default favoriteSlice.reducer;

export const {  } = favoriteSlice.actions;

// createAsyncThunk;

// createAsyncThunk- для созд асинхрон кода
