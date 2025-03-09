import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./authThunks";

const initialState = {
  // id: null,
  name: null,
  surname: null,
  patronymic: null,
  phoneNumber: null,
  telegramUsername: null,
  email: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.name = action.payload.name;
        state.surname = action.payload.surname;
        state.patronymic = action.payload.patronymic;
        state.phoneNumber = action.payload.phoneNumber;
        state.telegramUsername = action.payload.telegramUsername;
        state.email = action.payload.email;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { logout } = userSlice.actions;
export default userSlice.reducer;
