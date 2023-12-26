import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Login";


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});


export default store;
