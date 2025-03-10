import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URLS } from "../constants/apiURLS";

const GET_USER_URL = API_URLS.getUser;

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

      const URL = `${GET_USER_URL}/${userId}`;

      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.log("resp", response);
        throw new Error("fetch failed");
      }

      const responseData = await response.json();

      const { data } = responseData;

      return { data };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);
