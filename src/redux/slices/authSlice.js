import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../api/authApi.js";
import { getCookie, setCookie } from "../../utils/browserUtils.js";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      const response = await loginApi({ login, password });
      const token = response.result.token;
      setCookie("accessToken", token);
      return token;
    } catch (err) {
      console.error("Login error:", err);
      return rejectWithValue(
        err.response?.data?.message || err.message || "Ошибка авторизации"
      );
    }
  }
);

export const logoutUser = createAction("LOGOUT");

const initialCookieToken = getCookie("accessToken");

const initialState = {
  isAuthenticated: !!initialCookieToken,
  token: initialCookieToken,
  loginUserError: null,
  loginUserRequest: false,
};

export const authSlice = createSlice({
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
        state.loginUserError = action.payload || "Ошибка авторизации";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.loginUserRequest = false;
        state.isAuthenticated = true;
      })
      .addCase(logoutUser, (state) => {
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const userReducer = authSlice.reducer;
