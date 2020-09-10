import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import questionReducer from "../features/Questions/questionSlice";
import commentReducer from "../features/Comments/commentSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    questions: questionReducer,
    comments: commentReducer,
  },
});
