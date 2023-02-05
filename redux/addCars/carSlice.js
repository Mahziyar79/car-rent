import { createSlice } from "@reduxjs/toolkit";
import { carItems } from "../../server/cartItems";

const initialState = {
  cars: carItems,
  darkMode :false
};
export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addLike: (state, action) => {
      const carId = action.payload;
      const isCarLiked = state.cars.find((car) => car.id === carId);
      isCarLiked.is_like = !isCarLiked.is_like;
      
    },
    darkMode : (state,action) => {
      state.darkMode = action.payload
    }
  },
});

export const { addLike , darkMode } = carSlice.actions;

export default carSlice.reducer;
