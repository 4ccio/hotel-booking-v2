import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "@/modules/Authentication";
import { userReducer } from "@/modules/User";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
