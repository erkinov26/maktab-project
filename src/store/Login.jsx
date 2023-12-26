import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    access: initalAuthState,
    users: [{ login: "erkinov0247", password: "abbos2003" }],
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export default authSlice;
export const authAction = authSlice.actions;
