import { dataPreparation } from "./dataPreparation";

export async function authRequest(data, url) {
  const cleanedData = dataPreparation(data);

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(cleanedData),
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  });

  const responseData = await response.json();

  if (!response.ok && response.status === 400) {
    const error = new Error(responseData.errorMessage);
    error.response = responseData;
    throw error;
  }

  return responseData;
}
