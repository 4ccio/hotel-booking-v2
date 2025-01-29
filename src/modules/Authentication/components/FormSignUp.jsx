import { useForm, Controller } from "react-hook-form";
import { AtSign } from "lucide-react";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";
import InputPhoneMask from "@/components/InputPhoneMask";
import InputWithStartIcon from "@/components/InputWithStartIcon";
import InputPassword from "@/components/InputPassword";
import { rules } from "../validation/validationRules";

const FormSignUp = () => {
  const {
    firstName: { name: firstName, rules: firstNameRules },
    surname: { name: surname, rules: surnameRules },
    patronymic: { name: patronymic, rules: patronymicRules },
    phone: { name: phone, rules: phoneRules },
    password: { name: password, rules: passwordRules },
    telegram: { name: telegram, rules: telegramRules },
  } = rules;

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      [firstName]: "",
      [surname]: "",
      [patronymic]: "",
      [phone]: "",
      [password]: "",
      [telegram]: "",
    },
  });

  const handleFormSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-6 flex flex-col gap-4">
        <div>
          <div className="mb-0.5 flex items-center justify-between">
            <Label className="">Имя</Label>
            {errors[firstName] ? (
              <span className="text-sm text-warning-text">
                {errors[firstName].message}
              </span>
            ) : null}
          </div>
          <Controller
            name={firstName}
            control={control}
            rules={firstNameRules}
            render={({ field }) => <Input {...field} />}
          />
        </div>
        <div>
          <div className="mb-0.5 flex items-center justify-between">
            <Label className="">Фамилия</Label>
            {errors[surname] ? (
              <span className="text-sm text-warning-text">
                {errors[surname].message}
              </span>
            ) : null}
          </div>
          <Controller
            name={surname}
            control={control}
            rules={surnameRules}
            render={({ field }) => <Input {...field} />}
          />
        </div>
        <div>
          <div className="mb-0.5 flex items-center justify-between">
            <Label className="">Отчество</Label>
            {errors[patronymic] ? (
              <span className="text-sm text-warning-text">
                {errors[patronymic].message}
              </span>
            ) : (
              <span className="text-sm text-muted-foreground">
                необязательно
              </span>
            )}
          </div>
          <Controller
            name={patronymic}
            control={control}
            rules={patronymicRules}
            render={({ field }) => <Input {...field} />}
          />
        </div>
        <div>
          <div className="mb-0.5 flex items-center justify-between">
            <Label className="">Телефон</Label>
            {errors[phone] ? (
              <span className="text-sm text-warning-text">
                {errors[phone].message}
              </span>
            ) : null}
          </div>
          <Controller
            name={phone}
            control={control}
            rules={phoneRules}
            render={({ field }) => <InputPhoneMask {...field} />}
          />
        </div>
        <div>
          <div className="mb-0.5 flex items-center justify-between">
            <Label className="">Пароль</Label>
            {errors[password] ? (
              <span className="text-sm text-warning-text">
                {errors[password].message}
              </span>
            ) : null}
          </div>
          <Controller
            name={password}
            control={control}
            rules={passwordRules}
            render={({ field }) => <InputPassword {...field} />}
          />
        </div>
        <div>
          <div className="mb-0.5 flex h-fit items-baseline justify-between">
            <Label className="">Телеграм</Label>
            {errors[telegram] ? (
              <span className="text-sm text-warning-text">
                {errors[telegram].message}
              </span>
            ) : (
              <span className="text-sm text-muted-foreground">
                необязательно
              </span>
            )}
          </div>
          <Controller
            name={telegram}
            control={control}
            rules={telegramRules}
            render={({ field }) => (
              <InputWithStartIcon icon={AtSign} {...field} />
            )}
          />
        </div>
      </div>
      <Button type="submit" className="w-full">
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default FormSignUp;
