import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authThunks";

const initialState = {
  isAuthorized: false,
  accessToken: localStorage.getItem("token") || null,
  isLoading: false,
  loginError: null,
  registerError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.accessToken = null;
      state.isAuthorized = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        localStorage.setItem("token", action.payload.accessToken);
        state.isLoading = false;
        state.isAuthorized = true;
        state.loginError = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loginError = action.payload;
        state.isLoading = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.registerError = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.registerError = action.payload;
        state.isLoading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
