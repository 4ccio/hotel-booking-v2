import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import AuthTabs from "./AuthTabs";

const AuthDrawer = ({ children }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <VisuallyHidden>
          <DrawerHeader>
            <DrawerTitle>Аутентификация</DrawerTitle>
            <DrawerDescription>
              Выберите вкладку для входа или регистрации.
            </DrawerDescription>
          </DrawerHeader>
        </VisuallyHidden>
        <AuthTabs className="px-6 py-4" />
      </DrawerContent>
    </Drawer>
  );
};

export default AuthDrawer;
