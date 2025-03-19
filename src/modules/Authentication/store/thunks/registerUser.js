import { createAsyncThunk } from "@reduxjs/toolkit";
import { authRequest } from "../../services/authRequest";
import { API_URLS as api } from "../../constants/apiURLS";

const REGISTER_URL = api.register;

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authRequest(data, REGISTER_URL);
      return response.isSuccess;
    } catch (error) {
      return rejectWithValue(
        error.response
          ? error.message
          : "Что-то пошло не так, повторите попытку позже",
      );
    }
  },
);
