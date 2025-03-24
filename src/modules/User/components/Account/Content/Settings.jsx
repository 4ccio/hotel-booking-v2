import { logout } from "@/modules/Authentication";
import { Button } from "@/ui/button";
import { useDispatch } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex max-w-40 flex-col gap-4">
      <Button className="">Сменить пароль</Button>
      <Button onClick={() => dispatch(logout())} variant="outline">
        Выйти
      </Button>
      <Button variant="destructive">Удалить аккаунт</Button>
    </div>
  );
};

export default Settings;
