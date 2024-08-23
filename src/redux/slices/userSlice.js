import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../api/authApi.js";
import { setCookie } from "../../utils/browserUtils.js";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await loginApi({ login, password });
      setCookie("accessToken", response.result.token);
    } catch (err) {
      return rejectWithValue(err.response.data); // обработка ошибки
    }
  }
);

const initialState = {
  isAuthChecked: false,
  isAuthenticated: false,
  data: null,
  loginUserError: null,
  loginUserRequest: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginUserRequest = true;
        state.loginUserError = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginUserRequest = false;
        state.loginUserError = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loginUserRequest = false;
        state.isAuthenticated = true;
        state.isAuthChecked = true;
      });
  },
});

export const userReducer = userSlice.reducer;
