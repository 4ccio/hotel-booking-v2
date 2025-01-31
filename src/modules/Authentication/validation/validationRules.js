export const inputRules = {
  removeDigits: (value) => value.replace(/\d/g, ""),
  removeSpaces: (value) => value.replace(/\s/g, ""),
  // onlyLatin: (value) => value.replace(/[^a-zA-Z]/g, ""),
};

export function handleInputChange(e, appliedRules) {
  let newValue = e.target.value;

  // appliedRules.forEach((rule) => {
  //   newValue = rule(newValue);
  // });

  Object.values(appliedRules).forEach((rule) => (newValue = rule(newValue)));

  // if (inputRules.removeDigits) {
  //   newValue = newValue.replace(/\d/g, "");
  // }

  // if (inputRules.removeSpaces) {
  //   newValue = newValue.replace(/\s/g, "");
  // }

  // if (inputRules.onlyLatin) {
  //   newValue = newValue.replace(/[^a-zA-Z]/g, "");
  // }

  return newValue;
}

export const validatePhone = (value) => {
  const cleanedValue = value.replace(/\D/g, "");
  if (cleanedValue.length !== 11) {
    return "обязательное поле";
  }
  return true;
};

export const rules = {
  firstName: {
    name: "name",
    rules: {
      required: "обязательное поле",
    },
  },
  surname: {
    name: "surname",
    rules: {
      required: "обязательное поле",
    },
  },
  patronymic: {
    name: "patronymic",
    rules: {
      required: false,
    },
  },
  phone: {
    name: "phoneNumber",
    rules: {
      required: "обязательное поле",
      validate: validatePhone,
    },
  },
  password: {
    name: "password",
    rules: {
      required: "обязательное поле",
      minLength: {
        value: 5,
        message: "минимум 5 символов",
      },
      maxLength: {
        value: 20,
        message: "максимум 20 символов",
      },
    },
  },
  telegram: {
    name: "telegramUsername",
    rules: {
      required: false,
    },
  },
};
