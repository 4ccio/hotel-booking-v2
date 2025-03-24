import { createAsyncThunk } from "@reduxjs/toolkit";
import { authFetch } from "@/modules/Authentication";
import { API_URLS as api } from "../../constants/apiURLS";

const UPDATE_USER_URL = api.updateUser;

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, { dispatch, rejectWithValue, getState }) => {
    if (!userData) {
      return rejectWithValue("No data to update");
    }

    const { user } = getState();
    const userId = user.userData.id;

    const requestBody = { ...userData, id: userId };

    const URL = UPDATE_USER_URL;

    const responseData = await dispatch(
      authFetch({
        url: URL,
        options: {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(requestBody),
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
