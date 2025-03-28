import { CircleAlertIcon } from "lucide-react";
import { Button } from "@/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";

const DrawerAlert = ({ title, description, onSubmit, children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className={"gap-2"}>
          <div className="flex grow justify-center">
            <div
              className="flex size-12 shrink-0 items-center justify-center rounded-full border"
              aria-hidden="true"
            >
              <CircleAlertIcon className="opacity-90" size={24} />
            </div>
          </div>
          <DrawerTitle className="text-xl">{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex w-full gap-2">
            <DrawerClose asChild>
              <Button size="sm" className="w-full" variant="outline">
                Отмена
              </Button>
            </DrawerClose>
            <Button onClick={onSubmit} className="w-full" size="sm">
              Подтвердить
            </Button>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerAlert;
