import { Controller, useForm } from "react-hook-form";
import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { useState } from "react";
import { inputRules } from "@/lib/sanitizers";
import { fields as rules } from "../constants/formFieldsData";

const { onlyDigits } = inputRules;

const FormHotelSearch = () => {
  // console.trace("Form render");
  console.log("Form render");

  const [isShowTooltip, setIsShowTooltip] = useState(false);
  console.log("isShowTooltip", isShowTooltip);

  const handleToggleTooltip = (isError) => {
    console.log("isError", isError);
    setIsShowTooltip((prevState) => {
      return isError ? !prevState : prevState;
    });
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      destination: "",
      dates: {
        from: "",
        to: "",
      },
      guests: "",
    },
  });

  // console.log("render");

  const handleFormSubmit = (data) => {
    // alert(JSON.stringify(data));
  };

  return (
    <Card className="max-w-lg bg-background/80 xl:max-w-5xl xl:py-2">
      <CardHeader className="text-center">
        <CardTitle>Найдите подходящий отель в пару кликов!</CardTitle>
        <CardDescription>
          Для поиска отелей укажите место назначения, дату заезда и выезда и
          количество гостей
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid grid-cols-2 gap-6 xl:grid-cols-12 xl:gap-4">
            <div className="relative col-span-2 xl:col-span-4">
              <div>
                <Label>Место назначения</Label>
              </div>
              <div className="">
                <Controller
                  control={control}
                  name="destination"
                  rules={rules.destination.rules}
                  render={({ field }) => (
                    <Input
                      placeholder="Город или страна"
                      className={`h-10 bg-background/70 focus:bg-background/80 ${errors[rules.destination.name] ? "border-warning-component focus-visible:ring-warning-component" : null}`}
                      {...field}
                    ></Input>
                  )}
                />
              </div>
              <span className="absolute left-0 top-full">
                {errors[rules.destination.name] ? (
                  <span className="text-sm text-warning-text">
                    {errors[rules.destination.name].message}
                  </span>
                ) : null}
              </span>
            </div>
            <div className="relative col-span-2 xl:col-span-4">
              <div>
                <Label>Заезд — Выезд</Label>
              </div>
              <Controller
                control={control}
                name="dates"
                rules={rules.dates.rules}
                render={({ field }) => (
                  <DatePickerWithRange
                    className={`h-10 w-full bg-background/70 px-[11px] focus:bg-background/80 ${errors[rules.dates.name] ? "border-warning-component focus-visible:ring-warning-component" : null}`}
                    value={field.value}
                    onChange={field.onChange}
                    {...field}
                  ></DatePickerWithRange>
                )}
              />
              <span className="absolute left-0 top-full">
                {errors[rules.dates.name] ? (
                  <span className="text-sm text-warning-text">
                    {errors[rules.dates.name].message}
                  </span>
                ) : null}
              </span>
            </div>
            <div className="relative col-span-2 xl:col-span-2">
              <div>
                <Label>Гости</Label>
              </div>
              <Controller
                control={control}
                name="guests"
                rules={rules.guests.rules}
                render={({ field }) => (
                  <Input
                    placeholder="Количество гостей"
                    className={`h-10 bg-background/70 focus:bg-background/80 ${errors[rules.guests.name] ? "border-warning-component focus-visible:ring-warning-component" : null}`}
                    {...field}
                    onChange={(e) => {
                      let newValue = e.target.value;
                      newValue = onlyDigits(newValue);
                      field.onChange(newValue);
                    }}
                  ></Input>
                )}
              />
              <span className="absolute left-0 top-full">
                {errors[rules.guests.name] ? (
                  <span className="text-sm text-warning-text">
                    {errors[rules.guests.name].message}
                  </span>
                ) : null}
              </span>
            </div>
            <div className="col-span-2 mt-2 flex flex-grow items-end xl:col-span-2">
              <Button type="submit" className="w-full">
                Найти
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormHotelSearch;
