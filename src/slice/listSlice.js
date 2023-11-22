import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  shoppingListCount: 0,
  shoppingList: [],
};

export const listSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    increaseCounter: (state, action) => {
      state.shoppingListCount++;
    },
    decreaseCounter: (state, action) => {
      state.shoppingListCount--;
    },
    addToList: (state, action) => {
      state.shoppingList.push(action.payload);
    },
    removeFromList: (state, action) => {
      state.shoppingList = state.shoppingList.filter(
        (_, index) => index !== action.payload
      );
    },
    deleteList: (state, action) => {
      state.shoppingList = [];
      state.shoppingListCount = 0;
    },
  },
});

export const {
  increaseCounter,
  addToList,
  removeFromList,
  decreaseCounter,
  deleteList,
} = listSlice.actions;

export default listSlice.reducer;
