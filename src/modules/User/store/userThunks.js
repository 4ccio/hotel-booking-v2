import { createAsyncThunk } from "@reduxjs/toolkit";
import { authFetch } from "@/modules/Authentication";
import { API_URLS as api } from "../constants/apiURLS";
import { jwtDecode } from "jwt-decode";

const GET_USER_URL = api.getUser;

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { dispatch, rejectWithValue, getState }) => {
    const { auth } = getState();
    const token = auth.accessToken;

    if (!token) {
      return rejectWithValue("No valid token");
    }

    const decodedToken = jwtDecode(token);
    const userId = decodedToken.Id;

    if (!userId) {
      return rejectWithValue("No user id");
    }

    const URL = `${GET_USER_URL}/${userId}`;

    const responseData = await dispatch(
      authFetch({
        url: URL,
        options: {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        },
      }),
    );

    if (authFetch.rejected.match(responseData)) {
      return rejectWithValue(responseData.payload);
    }

    const { data } = responseData.payload;

    return { data };
  },
);
