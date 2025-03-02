import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/ui/dialog";
import AuthTabs from "./AuthTabs";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const AuthDialog = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[100vh] max-w-[24rem] overflow-hidden">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>Аутентификация</DialogTitle>
            <DialogDescription>
              Выберите вкладку для входа или регистрации.
            </DialogDescription>
          </DialogHeader>
        </VisuallyHidden>
        <AuthTabs />
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
