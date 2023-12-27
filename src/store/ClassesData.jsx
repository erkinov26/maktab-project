import { createSlice } from "@reduxjs/toolkit";
import classData from "../MockData/MockData";

const classDataSlice = createSlice({
  name: "classData",
  initialState: classData,
  reducers: {
    addClasses(state, action) {
      const newClass = action.payload;
      state.classData = [...state.classData, newClass];
    },
  },
});

export default classDataSlice;
export const classDataSliceAction = classDataSlice.actions;
