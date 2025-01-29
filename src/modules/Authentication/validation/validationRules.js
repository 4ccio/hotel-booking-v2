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
