import { createAsyncThunk } from "@reduxjs/toolkit";
import { authRequest } from "../services/authRequest";
import { API_URLS as api } from "../constants/apiURLS";

const LOGIN_URL = api.login;
const REGISTER_URL = api.register;
const REFRESH_URL = api.refresh;

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const accessToken = auth?.accessToken;

    if (!accessToken) {
      return rejectWithValue("No access token");
    }

    console.log(REFRESH_URL);

    const response = await fetch(REFRESH_URL, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accessToken),
    });

    if (!response.ok) {
      return rejectWithValue("Fialed to fetch refreshToken");
    }

    const { data } = await response.json();
    return { accessToken: data };
  },
);

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
