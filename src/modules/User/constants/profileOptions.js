import Profile from "../components/Account/Content/Profile";
import Settings from "../components/Account/Content/Settings";
import { UserRoundPen } from "lucide-react";
import { Settings as settingsIcon } from "lucide-react";

export const TABS = [
  { id: "profile", label: "Профиль", icon: UserRoundPen, content: Profile },
  { id: "settings", label: "Настройки", icon: settingsIcon, content: Settings },
];
