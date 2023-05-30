import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { AuthValue } from "components";
import { log } from "console";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "services";

interface UserState {
  email: string | null;
  creationTime: string | undefined;
}

const initialState = {} as UserState;

export const fetchSignUpUser = createAsyncThunk<UserState, AuthValue>(
  "user/fetchSignUpUser",
  async ({ email, password }) => {
    // try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);

    return {
      email: user.email,
      creationTime: user.metadata.creationTime,
    };
    // } catch (error) {}
    // const { user } = await createUserWithEmailAndPassword(auth, email, password);
    // return { email: user.email,  creationTime:user.metadata.creationTime };
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state, { payload }) => {});
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.creationTime = payload.creationTime;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {});
  },
});

export default userSlice.reducer;
