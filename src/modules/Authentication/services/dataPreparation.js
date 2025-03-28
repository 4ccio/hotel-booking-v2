export function dataPreparation(data) {
  const cleanedData = {};

  const formatValue = (key, value) => {
    let cleanedValue = value.trim();

    if (cleanedValue === "") {
      return null;
    }

    if (key === "phoneNumber") {
      cleanedValue = "+" + cleanedValue.replace(/[ \-()]/g, "");
    }

    if (key === "telegramUsername") {
      cleanedValue = "@" + cleanedValue.replace(/^@/, "");
    }

    return cleanedValue;
  };

  Object.entries(data).forEach(([key, value]) => {
    cleanedData[key] = formatValue(key, value);
  });

  return cleanedData;
}
