import { createSlice } from "@reduxjs/toolkit";

const uiState = {
  cartIsVisible: true,
};
export const uiSlice = createSlice({
  name: "UI",
  initialState: uiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});
export const uiActions = uiSlice.actions;
