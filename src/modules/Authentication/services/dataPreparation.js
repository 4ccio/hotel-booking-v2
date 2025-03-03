// import { apiAuth } from "./api";

export function dataPreparation(data) {
  const cleanedData = {};

  Object.entries(data).forEach(([key, value]) => {
    let cleanedValue = value.trim();

    if (key === "phoneNumber") {
      cleanedValue = cleanedValue.replace(/[ \-\(\)]/g, "");
    }

    if (key === "telegramUsername") {
      cleanedValue = "@" + cleanedValue.split("@").join("");
    }

    if (value === "") {
      cleanedValue = null;
    }
    cleanedData[key] = cleanedValue;
  });
  console.log(cleanedData);
  // apiAuth(cleanedData);
  return cleanedData;
}
