import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, updateUser } from "./thunks";

const initialState = {
  userData: {
    id: null,
    name: null,
    surname: null,
    patronymic: null,
    phoneNumber: null,
    telegramUsername: null,
    email: null,
  },
  isLoading: false,
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
        state.userData = action.payload.data;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
        state.userData = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.data;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setUserId } = userSlice.actions;
export default userSlice.reducer;
