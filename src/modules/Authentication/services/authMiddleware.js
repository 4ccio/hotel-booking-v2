import { apiAuth } from "./apiAuth";
import { dataPreparation } from "./dataPreparation";
import { API_URLS } from "@/modules/Authentication/constants/apiURLS";

const errorMessagesInForm = {
  default: "Что-то пошло не так, повторите попытку позже",
};

export async function handleAuthRequest(data, url) {
  try {
    const cleanedData = dataPreparation(data);
    return await apiAuth(url, cleanedData);
  } catch (error) {
    throw error;
  }
}

// function handleAuthErrors(error) {
//   if (error.response) {
//     console.log("here", error.message);
//     return error.message;
//   } else {
//     return errorMessagesInForm.default;
//   }
// }
