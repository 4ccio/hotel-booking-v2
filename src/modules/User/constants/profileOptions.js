import { UserRoundPen, Settings as settingsIcon } from "lucide-react";
import Profile from "../components/Account/Profile/Profile";
import Settings from "../components/Account/Settings/CardSettings";

export const TABS = [
  { id: "profile", label: "Профиль", icon: UserRoundPen, content: Profile },
  { id: "settings", label: "Настройки", icon: settingsIcon, content: Settings },
];
