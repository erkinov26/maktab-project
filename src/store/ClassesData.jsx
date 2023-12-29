/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import ClassesData from "../MockData/MockData";

const classDataSlice = createSlice({
  name: "classData",
  initialState: ClassesData,
  reducers: {
    addClasses(state, action) {
      const newClass = action.payload;
      return [...state, newClass];
    },
    deleteClass(state, action) {
      const classIdToDelete = action.payload.id;
      return state.filter((item) => item.id !== classIdToDelete);
    },
    deletePupil(state, action) {
      const { classId, pupilId } = action.payload;
      state.map((item) => {
        if (item.id === classId) {
          item.pupils.map((pupil) => {
            if (pupil.id === pupilId) {
              console.log(pupil.full_name);
            }
          });
        }
      });
    },
  },
});

export default classDataSlice;
export const classDataSliceAction = classDataSlice.actions;
