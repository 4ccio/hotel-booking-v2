import { createAsyncThunk } from "@reduxjs/toolkit";
import { refreshToken } from "./refreshToken";

let refreshingPromise = null;

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
      if (!refreshingPromise) {
        refreshingPromise = dispatch(refreshToken())
          .then((result) => {
            if (refreshToken.rejected.match(result)) {
              throw new Error("Refresh token failed");
            }
            return result.payload.accessToken;
          })
          .finally(() => {
            refreshingPromise = null;
          });
      }

      const newToken = await refreshingPromise;

      response = await fetchWithToken(newToken);
    }

    if (!response.ok) {
      return rejectWithValue("failed to authFetch");
    }

    return response.json();
  },
);
