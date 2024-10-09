import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URI } from "../api/api";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async function (_, { rejectedWithValue }) {
    try {
      const res = await axios.get(`${API_URI}/api/project-pages`);
      console.log(res.data.projectPages);
      if (res.status !== 200) {
        throw new Error("server error");
      }
      return res.data.projectPages;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    status: null,
    error: null,
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    removeComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload.id
      );
    },
    updateComment: (state, action) => {
      const { id, text } = action.payload;
      const commentToUpdate = state.comments.find(
        (comment) => comment.id === id
      );
      if (commentToUpdate) {
        commentToUpdate.text = text;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = "success";
        state.projects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ? action.payload.message : "Server error";
      });
  },
});

export const { addComment, removeComment, updateComment } =
  projectsSlice.actions;

export default projectsSlice.reducer;
