import { validateDates } from "../validation/validation";

export const fields = {
  destination: {
    name: "destination",
    rules: {
      required: "Обязательное поле",
    },
  },
  dates: {
    name: "dates",
    rules: {
      validate: validateDates,
    },
  },
  guests: {
    name: "guests",
    rules: {
      required: "Обязательное поле",
      min: {
        value: 1,
        message: "Минимум 1 гость",
      },
      max: {
        value: 10,
        message: "Максимум 10 гостей",
      },
    },
  },
};
