export function handleInputChange(e, appliedRules) {
  let newValue = e.target.value;
  Object.values(appliedRules).forEach((rule) => (newValue = rule(newValue)));
  return newValue;
}

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
      minLength: {
        value: 11,
        message: "номер неполный",
      },
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
