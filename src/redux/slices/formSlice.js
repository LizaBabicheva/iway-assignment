import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputs: {
    login: "",
    password: "",
  },
  errors: {
    login: [],
    password: [],
  },
  isButtonDisabled: true,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      const { field, value } = action.payload;
      state.inputs[field] = value;
    },
    setErrors: (state, action) => {
      const { field, error } = action.payload;
      state.errors[field] = error;
    },
    setButtonDisabled: (state, action) => {
      state.isButtonDisabled = action.payload;
    },
  },
});

export const { setInputValue, setErrors, setButtonDisabled } =
  formSlice.actions;
export const formReducer = formSlice.reducer;
