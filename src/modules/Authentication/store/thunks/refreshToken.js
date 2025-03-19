import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URLS as api } from "../../constants/apiURLS";

const REFRESH_URL = api.refresh;

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const accessToken = auth?.accessToken;

    if (!accessToken) {
      return rejectWithValue("No access token");
    }

    console.log(REFRESH_URL);

    const response = await fetch(REFRESH_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accessToken),
    });

    if (!response.ok) {
      return rejectWithValue("Fialed to fetch refreshToken");
    }

    const { data } = await response.json();
    return { accessToken: data };
  },
);
