import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const api = "http://127.0.0.1:8000";

export const signup = createAsyncThunk(
  "auth/register",
  async ({ name, password, email }) => {
    try {
      const response = await axios.post(`${api}/api/register`, {
        name,
        password,
        email,
      });

      console.log(response.data);

      const token = response.data.token;
      localStorage.setItem("access_token", token);
      localStorage.setItem("username", name);
      localStorage.setItem("email", email);
      return { email, token };
    } catch (error) {
      throw error;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ password, email }) => {
    try {
      const response = await axios.post(`${api}/api/login`, {
        password,
        email,
      });

      console.log(response.data);
      const token = response.data.token;
      localStorage.setItem("access_token", token);
      localStorage.setItem("email", email);
      return { email, token };
    } catch (error) {
      throw error;
    }
  }
);

export const refreshToken = createAsyncThunk("auth/refreshToken", async () => {
  try {
    const refreshToken = localStorage.getItem("refresh_token");
    const response = await axios.post(`${api}/refresh_token`, {
      refreshToken,
    });
    const newToken = response.data.access_token;
    localStorage.setItem("refresh_token", newToken);
    return newToken;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("access_token") || null,
    email: localStorage.getItem("email") || null,
    status: "",
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("email");
      localStorage.removeItem("username");

      state.token = null;
      state.email = null;
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.email = action.payload.email;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.email = action.payload.email;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
