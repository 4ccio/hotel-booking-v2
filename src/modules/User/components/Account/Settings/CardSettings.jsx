import { useDispatch } from "react-redux";
import { KeyRound, LogOut, Trash2 } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible";
import { Button } from "@/ui/button";
import { Separator } from "@/ui/separator";
import { logout } from "@/modules/Authentication";
import FormChangePassword from "./FormChangePassword";

const CardSettings = () => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-sm rounded-md border border-border p-6 shadow-sm">
      <p className="mb-4 text-2xl font-bold">Настройки</p>
      <div className="flex flex-col gap-4">
        <Collapsible>
          <div className="flex justify-between gap-2">
            <p className="text-lg">Пароль</p>
            <CollapsibleTrigger asChild>
              <Button size="sm" variant="outline">
                <KeyRound size={16} />
                Изменить
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-4">
            <FormChangePassword></FormChangePassword>
          </CollapsibleContent>
        </Collapsible>
        <Separator></Separator>
        <div className="flex justify-between gap-2">
          <p className="text-lg">Аккаунт</p>
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => dispatch(logout())}
              variant="outline"
              size="sm"
            >
              <LogOut size={16} />
              Выйти
            </Button>
            <Button
              variant="destructive"
              className="bg-warning-component text-warning-background"
              size="sm"
            >
              <Trash2 size={16} />
              Удалить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSettings;
