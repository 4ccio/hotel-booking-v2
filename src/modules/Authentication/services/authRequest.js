import { dataPreparation } from "./dataPreparation";

export async function authRequest(url, data) {
  try {
    const cleanedData = dataPreparation(data);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(cleanedData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.errorMessage ||
          "Что-то пошло не так, повторите попытку позже",
      );
    }

    return responseData;
  } catch (error) {
    throw error;
  }
}
