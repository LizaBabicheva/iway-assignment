import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice.js"; // Импортируйте редюсер из вашего userSlice

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
