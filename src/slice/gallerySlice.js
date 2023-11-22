import { createSlice, current } from "@reduxjs/toolkit";
import clock1 from "../img/clock.jpg";
import clock2 from "../img/clock2.jpg";
import clock3 from "../img/clock3.jpg";
import clock4 from "../img/clock4.jpg";
import clock5 from "../img/clock5.jpg";

const initialState = {
  gallery: [clock5, clock1, clock2, clock3, clock4, clock3, clock5, clock1],
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {},
});

export default gallerySlice.reducer;
