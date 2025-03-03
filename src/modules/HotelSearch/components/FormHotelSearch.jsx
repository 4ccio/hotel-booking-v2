import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { format } from "date-fns";
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
import { inputRules } from "@/lib/sanitizers";
import { fields as rules } from "../constants/formFieldsData";

const { onlyDigits } = inputRules;

const { destination, dates, guests } = rules;

const FormHotelSearch = () => {
  const navigate = useNavigate();

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

  const handleFormSubmit = (data) => {
    const { destination, guests } = data;
    const checkin = format(new Date(data.dates.from), "yyyy-MM-dd");
    const checkout = format(new Date(data.dates.to), "yyyy-MM-dd");

    navigate(
      `/search-result?destination=${destination}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`,
    );
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
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid grid-cols-2 gap-6 xl:grid-cols-12 xl:gap-4">
            <div className="relative col-span-2 xl:col-span-4">
              <div>
                <Label htmlFor={destination.name}>Место назначения</Label>
              </div>
              <div>
                <Controller
                  control={control}
                  name={destination.name}
                  rules={destination.rules}
                  render={({ field }) => (
                    <Input
                      id={destination.name}
                      placeholder="Город или страна"
                      className={`h-10 bg-background/70 focus:bg-background/80 ${errors[destination.name] ? "border-warning-component focus-visible:ring-warning-component" : null}`}
                      {...field}
                    ></Input>
                  )}
                />
              </div>
              <span className="absolute left-0 top-full">
                {errors[destination.name] ? (
                  <span className="text-sm text-warning-text">
                    {errors[destination.name].message}
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
                name={dates.name}
                rules={dates.rules}
                render={({ field }) => (
                  <DatePickerWithRange
                    className={`h-10 w-full bg-background/70 px-[11px] focus:bg-background/80 ${errors[dates.name] ? "border-warning-component focus-visible:ring-warning-component" : null}`}
                    value={field.value}
                    onChange={field.onChange}
                    {...field}
                  ></DatePickerWithRange>
                )}
              />
              <span className="absolute left-0 top-full">
                {errors[dates.name] ? (
                  <span className="text-sm text-warning-text">
                    {errors[dates.name].message}
                  </span>
                ) : null}
              </span>
            </div>
            <div className="relative col-span-2 xl:col-span-2">
              <div>
                <Label htmlFor={guests.name}>Гости</Label>
              </div>
              <Controller
                control={control}
                name={guests.name}
                rules={guests.rules}
                render={({ field }) => (
                  <Input
                    id={guests.name}
                    placeholder="Количество гостей"
                    className={`h-10 bg-background/70 focus:bg-background/80 ${errors[guests.name] ? "border-warning-component focus-visible:ring-warning-component" : null}`}
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
                {errors[guests.name] ? (
                  <span className="text-sm text-warning-text">
                    {errors[guests.name].message}
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
