import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";
import { handleAuthRequest } from "../../services/authMiddleware";
import { formFields, pickFormFields } from "../../constants/formFields";
import { API_URLS } from "../../constants/apiURLS";

const REQUEST_TYPE = API_URLS.login;
const loginFields = pickFormFields(formFields, ["phoneNumber", "password"]);

const FormSignIn = ({ setParentError }) => {
  console.log("render");
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: Object.fromEntries(
      loginFields.map(({ name }) => [name, ""]),
    ),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    setIsLoading((prevState) => !prevState);
    try {
      const result = await handleAuthRequest(data, REQUEST_TYPE);
      console.log(result);
    } catch (error) {
      const errorMessage =
        error.response?.errorMessage ||
        "Что-то пошло не так, повторите попытку позже";
      setParentError(errorMessage);
    }
    setIsLoading((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-6 flex flex-col gap-4">
        {loginFields.map(
          ({
            name,
            label,
            rules,
            inputComponent: Input,
            icon,
            optional,
            sanitizers,
          }) => (
            <div key={name}>
              <div className="mb-0.5 flex items-center justify-between">
                <Label htmlFor={name}>{label}</Label>
                {errors[name] ? (
                  <span className="text-sm text-warning-text">
                    {errors[name].message}
                  </span>
                ) : optional ? (
                  <span className="text-sm text-muted-foreground">
                    необязательно
                  </span>
                ) : null}
              </div>
              <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                  <Input
                    id={name}
                    {...field}
                    {...(icon ? { icon } : {})}
                    onChange={(e) => {
                      let newValue = e.target.value;
                      if (sanitizers) {
                        sanitizers.forEach((sanitize) => {
                          newValue = sanitize(newValue);
                        });
                      }
                      field.onChange(newValue);
                    }}
                  />
                )}
              />
            </div>
          ),
        )}
      </div>
      <Button disabled={isLoading} type="submit" className="w-full">
        {isLoading ? <LoaderCircle size={16} className="animate-spin" /> : null}
        Войти
      </Button>
    </form>
  );
};

export default FormSignIn;
