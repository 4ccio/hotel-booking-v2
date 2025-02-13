import { forwardRef, useState } from "react";
import { addDays, format, setDefaultOptions } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS as bp } from "@/config/breakpoints";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Calendar } from "@/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";

setDefaultOptions({ locale: ru });

function useDateRange() {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 1),
  });
  return { date, setDate };
}

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
    <span>
      {date?.from
        ? date.to
          ? `${format(date.from, "d LLL, y")} — ${format(date.to, "d LLL, y")}`
          : format(date.from, "d LLL y")
        : "Заезд - Выезд"}
    </span>
  </Button>
));

function DatePickerPopover({ date, setDate, className }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <DatePickerButton date={date} className={className} />
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          disabled={{ before: new Date() }}
          locale={ru}
          min={2}
          required
        />
      </PopoverContent>
    </Popover>
  );
}

function DatePickerDrawer({ date, setDate, className }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <DatePickerButton date={date} className={className} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Выберите дату заезда и выезда</DrawerTitle>
        </DrawerHeader>
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={1}
          disabled={{ before: new Date() }}
          locale={ru}
          min={2}
          required
        />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Закрыть</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export function DatePickerWithRange({ className }) {
  const { date, setDate } = useDateRange();
  const isMobile = useMediaQuery(bp.sm);

  return isMobile ? (
    <DatePickerDrawer date={date} setDate={setDate} className={className} />
  ) : (
    <DatePickerPopover date={date} setDate={setDate} className={className} />
  );
}
