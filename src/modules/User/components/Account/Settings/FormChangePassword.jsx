import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { formFields, pickFormFields } from "@/modules/Authentication";
import InputPassword from "@/components/InputPassword";
import AlertSuccess from "@/components/AlertSuccess";
import AlertError from "@/components/AlertError";
import { Button } from "@/ui/button";
import { Label } from "@/ui/label";

const FormChangePassword = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearMessages = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  const fields = pickFormFields(formFields, "password");

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { oldPassword: "", newPassword: "" },
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    setIsLoading(true);

    setTimeout(() => {
      clearMessages();
      if (Math.round(Math.random())) {
        setSuccessMessage("Пароль изменен");
      } else {
        setErrorMessage("Ошибка");
      }
      setIsLoading(false);
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12">
          <div className="mb-0.5 flex items-center justify-between">
            <Label htmlFor={"oldPassword"}>Старый пароль</Label>
            {errors["oldPassword"] ? (
              <span className="text-sm text-warning-text">
                {errors["oldPassword"].message}
              </span>
            ) : null}
          </div>
          <Controller
            name={"oldPassword"}
            control={control}
            rules={fields[0].rules}
            render={({ field }) => (
              <InputPassword
                id={"oldPassword"}
                {...field}
                onChange={(e) => {
                  let newValue = e.target.value;
                  if (fields[0].sanitizers) {
                    fields[0].sanitizers.forEach((sanitize) => {
                      newValue = sanitize(newValue);
                    });
                  }
                  field.onChange(newValue);
                }}
              />
            )}
          />
        </div>
        <div className="col-span-12">
          <div className="mb-0.5 flex items-center justify-between">
            <Label htmlFor={"newPassword"}>Новый пароль</Label>
            {errors["newPassword"] ? (
              <span className="text-sm text-warning-text">
                {errors["newPassword"].message}
              </span>
            ) : null}
          </div>
          <Controller
            name={"newPassword"}
            control={control}
            rules={fields[0].rules}
            render={({ field }) => (
              <InputPassword
                id={"newPassword"}
                {...field}
                onChange={(e) => {
                  let newValue = e.target.value;
                  if (fields[0].sanitizers) {
                    fields[0].sanitizers.forEach((sanitize) => {
                      newValue = sanitize(newValue);
                    });
                  }
                  field.onChange(newValue);
                }}
              />
            )}
          />
        </div>
        <div className="col-span-12 mt-2 flex flex-row-reverse items-center justify-between">
          <div>
            <Button disabled={isLoading} size="sm">
              {isLoading ? (
                <LoaderCircle size={16} className="animate-spin" />
              ) : null}
              Подтвердить
            </Button>
          </div>
          {errorMessage && <AlertError>{errorMessage}</AlertError>}
          {successMessage && <AlertSuccess>{successMessage}</AlertSuccess>}
        </div>
      </div>
    </form>
  );
};

export default FormChangePassword;
