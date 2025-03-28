import { useDispatch } from "react-redux";
import { KeyRound, LogOut, Trash2 } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/collapsible";
import { Button } from "@/ui/button";
import { Separator } from "@/ui/separator";
import ModalAlert from "@/components/ModalAlert";
import FormChangePassword from "./FormChangePassword";
import { logout } from "@/modules/Authentication";

const CardSettings = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logout());

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
            <ModalAlert
              title={"Выйти из аккаунта?"}
              description={"Вы уверены, что хотите выйти из учётной записи?"}
              onSubmit={handleLogOut}
            >
              <Button variant="outline" size="sm">
                <LogOut size={16} />
                Выйти
              </Button>
            </ModalAlert>
            <ModalAlert
              title={"Удалить аккаунт?"}
              description={"Вы уверены, что хотите удалить учётную запись?"}
              onSubmit={() => true}
            >
              <Button
                variant="destructive"
                className="bg-warning-component text-warning-background"
                size="sm"
              >
                <Trash2 size={16} />
                Удалить
              </Button>
            </ModalAlert>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSettings;
