import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice"; // <-- To‘g‘ri yo‘lni tekshiring

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
