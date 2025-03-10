import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { authRequest } from "../services/authRequest";
import { API_URLS } from "../constants/apiURLS";
import { setUserId } from "@/modules/User";

const LOGIN_URL = API_URLS.login;

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await authRequest(data, LOGIN_URL);

      const token = response.data;

      const decodedToken = jwtDecode(token);
      const userId = decodedToken.Id;

      dispatch(setUserId(userId));

      return { accessToken: token };
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response
          ? error.message
          : "Что-то пошло не так, повторите попытку позже",
      );
    }
  },
);
