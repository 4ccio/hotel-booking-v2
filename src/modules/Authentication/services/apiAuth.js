// const URL_REGISTER = "https://localhost:44331/api/Auth/client/register";

export async function apiAuth(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok && response.status === 400) {
      const responseData = await response.json();
      const error = new Error(responseData.errorMessage);
      error.response = responseData;
      throw error;
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
