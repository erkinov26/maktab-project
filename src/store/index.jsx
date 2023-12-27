import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Login";
import classDataSlice from "./ClassesData";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    classData: classDataSlice.reducer,
  },
});

export default store;
