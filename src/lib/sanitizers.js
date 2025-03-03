export const inputRules = {
  removeDigits: (value) => value.replace(/\d/g, ""),
  removeSpaces: (value) => value.replace(/\s/g, ""),
  onlyDigits: (value) => value.replace(/\D/g, ""),
};
