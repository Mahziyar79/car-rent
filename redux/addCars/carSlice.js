import { createSlice } from "@reduxjs/toolkit";
import { carItems } from "../../server/cartItems";

const initialState = {
  cars: carItems,
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
  },
});

export const { addLike } = carSlice.actions;

export default carSlice.reducer;
