import { useDispatch, useSelector } from "react-redux";
import { AuthForm, formFields, pickFormFields } from "@/modules/Authentication";
import { updateUser } from "@/modules/User";

const FormUpdateUser = ({ setErrorMessage, setSuccessMessage }) => {
  const fields = [
    "name",
    "surname",
    "patronymic",
    "phoneNumber",
    "telegramUsername",
  ];
  const profileFields = pickFormFields(formFields, fields);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const userData = useSelector((state) => state.user.userData);

  const selectedUserData = fields.reduce((acc, key) => {
    if (key in userData) {
      acc[key] = userData[key] || "";
    }
    return acc;
  }, {});

  const handleFormSubmit = async (data) => {
    console.log(data);
    try {
      await dispatch(updateUser(data)).unwrap(); // Если ошибка, сразу поймаем в catch
      setSuccessMessage("Данные успешно обновлены");
    } catch {
      setErrorMessage("Ошибка обновления данных"); // error = payload из rejectWithValue
    }
  };

  return (
    <AuthForm
      fields={profileFields}
      onSubmit={handleFormSubmit}
      submitText="Обновить данные"
      isLoading={isLoading}
      currentValues={selectedUserData}
    />
  );
};

export default FormUpdateUser;
