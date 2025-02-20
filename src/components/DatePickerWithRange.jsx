import { forwardRef, useMemo, useState } from "react";
import { format, setDefaultOptions } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon, CircleX, Trash2 } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS as bp } from "@/config/breakpoints";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Calendar } from "@/ui/calendar";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/popover";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";
import { Separator } from "@/ui/separator";

setDefaultOptions({ locale: ru });

const DatePickerButton = forwardRef(({ date, className, ...props }, ref) => (
  <Button
    ref={ref}
    id="date"
    variant="outline"
    className={cn(
      "justify-start text-left font-normal",
      !date && "text-muted-foreground",
      className,
    )}
    {...props}
  >
    <CalendarIcon size={20} className="text-muted-foreground" />
    {date?.from ? (
      date.to ? (
        `${format(date.from, "d LLL, y")} — ${format(date.to, "d LLL, y")}`
      ) : (
        format(date.from, "d LLL y")
      )
    ) : (
      <span className="text-muted-foreground">Заезд — Выезд</span>
    )}
  </Button>
));

const DatePickerPopover = forwardRef(({ date, setDate, className }, ref) => (
  <Popover>
    <PopoverTrigger asChild>
      <DatePickerButton ref={ref} date={date} className={className} />
    </PopoverTrigger>
    <PopoverContent className="w-auto p-4" align="center">
      <Calendar
        className={"p-0"}
        initialFocus
        autoFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        disabled={{ before: new Date() }}
        locale={ru}
        min={2}
        max={30}
      />
      <Separator className="my-4" />
      <div className="flex justify-end gap-4">
        <Button
          size={"sm"}
          variant="outline"
          onClick={() => {
            if (date?.from || date?.to) {
              setDate({ from: "", to: "" });
            }
          }}
        >
          Очистить
        </Button>
        <PopoverClose asChild>
          <Button size={"sm"} disabled={!date?.from || !date?.to}>
            Выбрать
          </Button>
        </PopoverClose>
      </div>
    </PopoverContent>
  </Popover>
));

const DatePickerDrawer = forwardRef(({ date, setDate, className }, ref) => (
  <Drawer>
    <DrawerTrigger asChild>
      <DatePickerButton ref={ref} date={date} className={className} />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Выберите дату заезда и выезда</DrawerTitle>
      </DrawerHeader>
      <Calendar
        initialFocus
        autoFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={setDate}
        numberOfMonths={1}
        disabled={{ before: new Date() }}
        locale={ru}
        min={2}
        max={30}
      />
      <DrawerFooter className={"grid grid-cols-2 gap-4"}>
        <div className="col-span-1">
          <Button
            className="w-full"
            variant="outline"
            onClick={() => {
              if (date?.from || date?.to) {
                setDate({ from: "", to: "" });
              }
            }}
          >
            <Trash2 size={16}></Trash2>
            Очистить
          </Button>
        </div>
        <DrawerClose asChild className="col-span-1">
          <Button className="w-full" variant="outline">
            <CircleX size={16}></CircleX>
            Закрыть
          </Button>
        </DrawerClose>
        <DrawerClose asChild className="col-span-2">
          <Button className="w-full" disabled={!date?.from || !date?.to}>
            Выбрать
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
));

export const DatePickerWithRange = forwardRef(
  ({ className, value, onChange, ...props }, ref) => {
    console.log("DatePickerWithRange render");
    const isMobile = useMediaQuery(bp.sm);

    return isMobile ? (
      <DatePickerDrawer
        ref={ref}
        date={value}
        setDate={onChange}
        className={className}
        {...props}
      />
    ) : (
      <DatePickerPopover
        ref={ref}
        date={value}
        setDate={onChange}
        className={className}
        {...props}
      />
    );
  },
);
