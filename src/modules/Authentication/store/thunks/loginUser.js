import { createAsyncThunk } from "@reduxjs/toolkit";
import { authRequest } from "../../services/authRequest";
import { API_URLS as api } from "../../constants/apiURLS";

const LOGIN_URL = api.login;

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authRequest(data, LOGIN_URL);
      const token = response.data;
      return { accessToken: token };
    } catch (error) {
      return rejectWithValue(
        error.response
          ? error.message
          : "Что-то пошло не так, повторите попытку позже",
      );
    }
  },
);
