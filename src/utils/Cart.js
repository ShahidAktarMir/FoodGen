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
    removeItem: (state, action) => {
      const index = state.item.findIndex(
        (c) => c.card?.info?.id == action.payload
      );
      if (index != -1) {
        state.item.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.item = [];
    },
  },
});
export const { addItem, clearCart, removeItem } = Cart.actions;
export default Cart.reducer;
