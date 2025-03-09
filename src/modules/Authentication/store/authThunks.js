import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { authRequest } from "../services/authRequest";
import { API_URLS } from "../constants/apiURLS";

const LOGIN_URL = API_URLS.login;
const GET_USER_URL = "https://localhost:44331/api/v1/User/";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authRequest(data, LOGIN_URL);

      const decodedToken = jwtDecode(response.data);
      console.log(decodedToken);

      return { userId: decodedToken.Id };
    } catch (error) {
      return rejectWithValue(
        error.response
          ? error.message
          : "Что-то пошло не так, повторите попытку позже",
      );
    }
  },
);

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const userId = auth.userId;

      // const requestBody = {
      //   userId,
      // };

      const response = await fetch(GET_USER_URL + userId, {
        method: "GET",
        headers: { "Content-type": "application/json" },
        // body: JSON.stringify(requestBody),
        credentials: "include",
      });

      if (!response.ok) {
        console.log("resp", response);
        throw new Error("failed");
      }

      const responseData = await response.json();

      const { data } = responseData;

      return { data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
