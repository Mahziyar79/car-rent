import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../redux/addCars/carSlice'

const store = configureStore({
  reducer: {carReducer},
})
export default store;