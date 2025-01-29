import { useForm, Controller } from "react-hook-form";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";
import InputPhoneMask from "@/components/InputPhoneMask";
import InputPassword from "@/components/InputPassword";
import { rules } from "../validation/validationRules";

const FormSignIn = () => {
  const {
    phone: { name: phoneNumber, rules: phoneRules },
    password: { name: password, rules: passwordRules },
  } = rules;

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      [phoneNumber]: "",
      [password]: "",
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
            <Label className="">Телефон</Label>
            {errors[phoneNumber] ? (
              <span className="text-sm text-warning-text">
                {errors[phoneNumber].message}
              </span>
            ) : null}
          </div>
          <Controller
            name={phoneNumber}
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
      </div>
      <Button type="submit" className="w-full">
        Войти
      </Button>
    </form>
  );
};

export default FormSignIn;
