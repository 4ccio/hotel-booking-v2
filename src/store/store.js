import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/modules/Authentication/store/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
