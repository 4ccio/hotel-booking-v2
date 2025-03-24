import { useForm, Controller } from "react-hook-form";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";
import { LoaderCircle } from "lucide-react";
import { useEffect } from "react";

const AuthForm = ({
  fields,
  onSubmit,
  submitText,
  isLoading,
  currentValues,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: Object.fromEntries(fields.map(({ name }) => [name, ""])),
  });

  useEffect(() => {
    if (currentValues) {
      reset(currentValues);
    }
  }, [currentValues, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6 flex flex-col gap-4">
        {fields.map(
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
        {submitText}
      </Button>
    </form>
  );
};

export default AuthForm;
