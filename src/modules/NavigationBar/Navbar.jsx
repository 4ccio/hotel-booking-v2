import { Link } from "react-router";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";

import { Heart, CircleUserRound } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS as bp } from "@/constants/breakpoints";
import logo from "@/assets/logo.svg";
import { AuthDialog } from "@/modules/Authentication";

const Navbar = () => {
  const isMobile = useMediaQuery(bp.sm);
  console.log(isMobile);
  return (
    <nav className="container mx-auto flex w-full items-center justify-between py-4">
      <Link to={"/"} className="flex items-center">
        <img src={logo} alt="logo" className="mr-2 size-12"></img>
        <span className="text-xl font-bold sm:text-2xl">myHotel</span>
      </Link>
      <div className="flex items-center gap-2 sm:gap-6">
        <div>
          <Button variant="ghost" size={isMobile ? "icon" : "default"}>
            <Heart size={20} />
            {!isMobile ? (
              <span className="text-lg font-semibold">Избранное</span>
            ) : null}
          </Button>
        </div>
        <div>
          <AuthDialog>
            <Button variant="ghost" size={isMobile ? "icon" : "default"}>
              <CircleUserRound size={20} />
              {!isMobile ? (
                <span className="text-lg font-semibold">Войти</span>
              ) : null}
            </Button>
          </AuthDialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
