import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../services/api";

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth, user } = getState();
      const userId = user.userData.id;
      const token = auth.accessToken;

      if (!token) {
        throw new Error("No valid token");
      }

      const responseData = await getUser(userId, token);

      const { data } = responseData;

      return { data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
