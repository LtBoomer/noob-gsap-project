import { createSlice, current } from "@reduxjs/toolkit";
import clock from "../img/clock.jpg";

const initialState = {
  products: [
    {
      name: "OogaBooga1",
      price: "2000",
      rating: 2,
      image: clock,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit optio accusantium deleniti. Corporis, esse? Dolorum quidem quisquam quibusdam. In est quo modi tempore laboriosam ipsa consectetur quaerat quisquam repudiandae?",
    },
    {
      name: "OogaBooga2",
      price: "99000",
      rating: 1,
      image: clock,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit optio accusantium deleniti. Corporis, esse? Dolorum quidem quisquam quibusdam. In est quo modi tempore laboriosam ipsa consectetur quaerat quisquam repudiandae?",
    },
    {
      name: "OogaBooga3",
      price: "300",
      rating: 4,
      image: clock,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit optio accusantium deleniti. Corporis, esse? Dolorum quidem quisquam quibusdam. In est quo modi tempore laboriosam ipsa consectetur quaerat quisquam repudiandae?",
    },
    {
      name: "OogaBooga4",
      price: "6000",
      rating: 2,
      image: clock,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit optio accusantium deleniti. Corporis, esse? Dolorum quidem quisquam quibusdam. In est quo modi tempore laboriosam ipsa consectetur quaerat quisquam repudiandae?",
    },
    {
      name: "OogaBooga5",
      price: "2000",
      rating: 3,
      image: clock,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit optio accusantium deleniti. Corporis, esse? Dolorum quidem quisquam quibusdam. In est quo modi tempore laboriosam ipsa consectetur quaerat quisquam repudiandae?",
    },
    {
      name: "GIgaChad",
      price: "10000000",
      rating: 100,
      image: clock,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia suscipit optio accusantium deleniti. Corporis, esse? Dolorum quidem quisquam quibusdam. In est quo modi tempore laboriosam ipsa consectetur quaerat quisquam repudiandae?",
    },
  ],
  current: {},
};

export const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setRating: (state, action) => {
      state.products.forEach((product, index) => {
        if (product.name === action.payload.name) {
          state.products[index].rating = action.payload.rating;
        }
      });
    },
  },
});

export const { setCurrent, setRating } = counterSlice.actions;

export default counterSlice.reducer;
