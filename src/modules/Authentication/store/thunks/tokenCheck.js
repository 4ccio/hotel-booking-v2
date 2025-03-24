import { createAsyncThunk } from "@reduxjs/toolkit";
import { authFetch } from "./authFetch";
import { API_URLS as api } from "../../constants/apiURLS";

const URL = api.tokenCheck;

export const tokenCheck = createAsyncThunk(
  "auth/tokenCheck",
  async (_, { dispatch, rejectWithValue }) => {
    const responseAction = await dispatch(
      authFetch({
        url: URL,
        options: {
          method: "GET",
        },
      }),
    );

    if (authFetch.rejected.match(responseAction)) {
      return rejectWithValue("failed to validate access token");
    }

    return true;
  },
);
