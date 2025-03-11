import { API_URLS } from "../constants/apiURLS";

const GET_USER_URL = API_URLS.getUser;

export async function getUser(userId, token) {
  const URL = `${GET_USER_URL}/${userId}`;

  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("fetch failed");
  }

  const responseData = await response.json();

  return responseData;
}
