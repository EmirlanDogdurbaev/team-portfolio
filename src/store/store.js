import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slicers/authSlicer";
import projectsReducer from "./Slicers/projectsSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectsReducer,
  },
});

export default store;
