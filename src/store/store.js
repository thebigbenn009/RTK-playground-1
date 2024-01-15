import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./features/ui-slice";
import { cartSlice } from "./features/cart-slice/cartSlice";

const store = configureStore({
  reducer: {
    UI: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
