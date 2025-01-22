import { Link } from "react-router";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";

import { Heart, CircleUserRound } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BREAKPOINTS as bp } from "@/constants/breakpoints";
import logo from "@/assets/logo.svg";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";
import InputMask from "react-input-mask";
import InputPhoneMask from "@/components/InputPhoneMask";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

const Navbar = () => {
  const isMobile = useMediaQuery(bp.sm);
  console.log(isMobile);
  return (
    <nav className="container mx-auto flex w-full items-center justify-between py-4">
      <Link to={"/"} className="flex items-center">
        <img src={logo} alt="logo" className="mr-2 size-12 w-auto"></img>
        <span className="font-nunito text-xl font-bold sm:text-2xl">
          myHotel
        </span>
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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size={isMobile ? "icon" : "default"}>
                <CircleUserRound size={20} />
                {!isMobile ? (
                  <span className="text-lg font-semibold">Войти</span>
                ) : null}
              </Button>
            </DialogTrigger>
            <DialogContent className="">
              <Tabs defaultValue="logIn" className="mt-6">
                <TabsList className="grid h-fit w-full grid-cols-2">
                  <TabsTrigger value="logIn" className="rounded-lg py-1">
                    <span className="font-nunito text-base font-semibold">
                      Войти
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="signUp" className="rounded-lg">
                    <span className="font-nunito text-base font-semibold">
                      Создать аккаунт
                    </span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="logIn">
                  <Card className="bg-background">
                    <DialogHeader>
                      <CardHeader>
                        <DialogTitle>
                          <CardTitle className="text-center">Войти</CardTitle>
                        </DialogTitle>
                        <DialogDescription>
                          <CardDescription className="text-center">
                            Войдите в свой аккаунт.
                          </CardDescription>
                        </DialogDescription>
                      </CardHeader>
                    </DialogHeader>
                    <CardContent>
                      <div>
                        <div className="flex items-center gap-4">
                          <Label className="text-base">Телефон</Label>
                          <InputPhoneMask
                            className={"h-8 max-w-40 bg-transparent px-2"}
                          ></InputPhoneMask>
                        </div>
                        <div className="flex items-center gap-4">
                          <Label className="text-base">Пароль</Label>
                          <InputPhoneMask
                            className={"h-8 max-w-40 bg-transparent px-2"}
                          ></InputPhoneMask>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <p>Card Footer</p>
                    </CardFooter>
                  </Card>
                  {/* <DialogHeader>
                    <DialogTitle>Войти</DialogTitle>
                    <DialogDescription>
                      Войдите в свой аккаунт.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-2 flex items-center gap-4">
                    <Label>Телефон</Label>
                    <InputPhoneMask
                      className={"h-8 max-w-40 px-2"}
                    ></InputPhoneMask>
                  </div> */}
                  {/* <DialogFooter>футер</DialogFooter> */}
                </TabsContent>
                <TabsContent value="signUp">
                  <DialogHeader>
                    <DialogTitle>Зарегистрироваться</DialogTitle>
                    <DialogDescription>Создайте аккаунт.</DialogDescription>
                  </DialogHeader>
                  <div>форма</div>
                  {/* <DialogFooter>футер</DialogFooter> */}
                </TabsContent>
              </Tabs>
              {/* <DialogFooter></DialogFooter> */}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
