import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import shoppingListReducer from "./slice/listSlice";
import gallerySliceReducer from "./slice/gallerySlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    shoppingList: shoppingListReducer,
    gallery: gallerySliceReducer,
  },
});
