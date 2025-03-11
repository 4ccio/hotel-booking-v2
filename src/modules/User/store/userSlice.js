import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./userThunks";

const storedUserData = JSON.parse(sessionStorage.getItem("userData") || "null");

const initialState = {
  userData: storedUserData || {
    id: null,
    name: null,
    surname: null,
    patronymic: null,
    phoneNumber: null,
    telegramUsername: null,
    email: null,
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userData.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userData = action.payload.data;
        sessionStorage.setItem("userData", JSON.stringify(action.payload.data));
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
