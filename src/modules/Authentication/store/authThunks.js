import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { authRequest } from "../services/authRequest";
import { API_URLS } from "../../constants/apiURLS";

const LOGIN_URL = API_URLS.login;

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authRequest(data, LOGIN_URL);

      const decodedToken = jwtDecode(response.data);

      return { userId: decodedToken.userId };
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
    } catch (error) {}
  },
);
