import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/authSlice.js";
import { getRides } from "./api/ridesApi.js";
import { formReducer } from "./slices/formSlice.js"; // Импортируйте редюсер из вашего userSlice

export const store = configureStore({
  reducer: {
    user: userReducer,
    [getRides.reducerPath]: getRides.reducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getRides.middleware),
});

export default store;
