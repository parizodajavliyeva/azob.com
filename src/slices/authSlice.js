import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authentication",
  initialState: { isAuthenticated: false },
  reducers: {
    signIn: (state) => {
      state.isAuthenticated = true;
    },
    signOut: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
