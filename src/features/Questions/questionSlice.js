import { createSlice } from "@reduxjs/toolkit";

// create a slice function with name, initial state and reducer function

export const questionSlice = createSlice({
  name: "questions",
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      // Add Question reducer function
    },
    editQuestion: (state, action) => {
      // edit question reducer function
    },
    removeQuestion: (state, action) => {
      // remove question reducer function
    },
  },
});

export const {
  addQuestion,
  editQuestion,
  removeQuestion,
} = questionSlice.actions;

export const selectQuestions = (state) => state.questions;

export default questionSlice.reducer;
