import { createSlice } from "@reduxjs/toolkit";

export const commentSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      // Add Comment Reducer
    },
    editComment: (state, action) => {
      // edit comment reducer
    },
    removeComment: (state, action) => {
      // Remove comment reducer
    },
  },
});

export const { addComment, editComment, removeComment } = commentSlice.actions;

export const comments = (state) => state.comments;

export default commentSlice.reducer;
