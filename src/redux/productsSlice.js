import { createSlice } from '@reduxjs/toolkit';
import items from './items.json';

items.forEach(item => {item.count = 0});

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: items,
    money: 100000000000,
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = action.payload;
    },
    increment: (state, action) => {
      let item = state.items.filter(item => item.name === action.payload)[0];
      item.count++;
      state.money -= item.price;
    },
    decrement: (state, action) => {
      let item = state.items.filter(item => item.name === action.payload)[0];
      item.count--;
      state.money += item.price;
    }
  },
});

export const { addToBasket, increment, decrement } = productsSlice.actions;
export default productsSlice.reducer;