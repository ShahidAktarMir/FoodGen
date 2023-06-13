import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  name: "Cart",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
    },
    clearCart: (state) => {
      state.item = [];
    },
  },
});
export const { addItem, clearCart } = Cart.actions;
export default Cart.reducer;
