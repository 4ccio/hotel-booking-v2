import { createAsyncThunk } from "@reduxjs/toolkit";
import { refreshToken } from "./refreshToken";

export const authFetch = createAsyncThunk(
  "auth/authFetch",
  async ({ url, options = {} }, { dispatch, getState, rejectWithValue }) => {
    const { auth } = getState();
    const accessToken = auth?.accessToken;

    const fetchWithToken = async (token) => {
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        },
      });
    };

    let response = await fetchWithToken(accessToken);

    if (response.status === 401) {
      const refreshResponse = await dispatch(refreshToken());

      if (refreshToken.rejected.match(refreshResponse)) {
        return rejectWithValue(
          "Unauthorized, access and refresh tokens invalid",
        );
      }

      response = await fetchWithToken(refreshResponse.payload.accessToken);
    }

    if (!response.ok) {
      console.log(response.status);
      return rejectWithValue("failed to authFetch");
    }

    return response.json();
  },
);
