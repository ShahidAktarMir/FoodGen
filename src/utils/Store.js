import { configureStore } from "@reduxjs/toolkit";
import Cart from "./Cart";

const Store = configureStore({
  reducer: {
    cart: Cart,
  },
});
export default Store;
