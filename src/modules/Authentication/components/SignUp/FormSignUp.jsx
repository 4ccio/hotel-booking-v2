import { useForm, Controller } from "react-hook-form";
import { LoaderCircle } from "lucide-react";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";
import { formFields } from "../../constants/formFields";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/thunks";

const FormSignUp = ({ setErrorMessage, onSignUpSuccess }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    defaultValues: Object.fromEntries(formFields.map(({ name }) => [name, ""])),
  });

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleFormSubmit = async (data) => {
    const resultAction = await dispatch(registerUser(data));

    if (registerUser.fulfilled.match(resultAction)) {
      onSignUpSuccess();
    } else if (registerUser.rejected.match(resultAction)) {
      setErrorMessage(resultAction.payload);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-6 flex flex-col gap-4">
        {formFields.map(
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
                <Label>{label}</Label>
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
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default FormSignUp;
