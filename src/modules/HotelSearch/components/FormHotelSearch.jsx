import { DatePickerWithRange } from "@/components/DatePickerWithRange";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { useForm } from "react-hook-form";

const FormHotelSearch = () => {
  const form = useForm({
    defaultValues: {
      destination: "",
      dates: "",
      guests: "",
    },
  });
  return (
    <Card className="max-w-xl bg-background/80 xl:max-w-5xl">
      <CardHeader className="text-center">
        <CardTitle>Lorem ipsum dolor sit amet consectetur</CardTitle>
        <CardDescription>
          Для поиска отелей укажите место назначения, дату заезда и выезда и
          количество гостей
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-12">
            <div className="col-span-2 xl:col-span-4">
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={""}>Место назначения</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Город или страна"
                        className={
                          "h-10 bg-background/70 focus:bg-background/80"
                        }
                        {...field}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="col-span-2 xl:col-span-4">
              <FormField
                control={form.control}
                name="dates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={""}>Заезд — Выезд</FormLabel>
                    <FormControl>
                      <DatePickerWithRange
                        className={
                          "w-full bg-background/70 px-[11px] focus:bg-background/80"
                        }
                        {...field}
                      ></DatePickerWithRange>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="col-span-2 xl:col-span-2">
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={""}>Гости</FormLabel>
                    <FormControl>
                      <Input
                        // type="number"
                        placeholder="Количество гостей"
                        className={
                          "h-10 bg-background/70 focus:bg-background/80"
                        }
                        {...field}
                      ></Input>
                    </FormControl>
                  </FormItem>
                )}
              ></FormField>
            </div>
            <div className="col-span-2 flex flex-grow items-end xl:col-span-2">
              <Button className="w-full">Найти</Button>
            </div>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormHotelSearch;
