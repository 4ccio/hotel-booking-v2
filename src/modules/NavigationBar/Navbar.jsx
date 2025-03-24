import { Link } from "react-router";
import { Button } from "@/ui/button";
import { Heart, CircleUserRound } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS as bp } from "@/config/breakpoints";
import logo from "@/assets/logo.svg";
import { AuthModal } from "@/modules/Authentication";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isMobile = useMediaQuery(bp.sm);

  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const userData = useSelector((state) => state.user.userData);
  const name =
    userData?.name && userData.name.length <= 20 ? userData.name : "Профиль";

  return (
    <nav className="border-b border-border">
      <div className="container mx-auto flex w-full items-center justify-between py-2 sm:py-4">
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="logo" className="mr-2 size-8 sm:size-10"></img>
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
          <div className="">
            {isAuthorized ? (
              <Link to={"account"}>
                <Button variant="ghost" size={isMobile ? "icon" : "default"}>
                  <CircleUserRound size={20} />
                  {!isMobile ? (
                    <p className="text-lg font-semibold">{name}</p>
                  ) : null}
                </Button>
              </Link>
            ) : (
              <AuthModal>
                <Button variant="ghost" size={isMobile ? "icon" : "default"}>
                  <CircleUserRound size={20} />
                  {!isMobile ? (
                    <span className="text-lg font-semibold">Войти</span>
                  ) : null}
                </Button>
              </AuthModal>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
