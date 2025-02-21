export const validateDates = (data) => {
  const { from, to } = data;

  if (!from || !to) {
    return "Введите дату заезда и выезда";
  }

  // эта проверка необязательна, т.к. DatePickerWithRange не разрешит выставить дату from позже чем to, но на всякий случай)
  if (from > to) {
    return "Дата заезда не может быть позже даты выезда";
  }
};
