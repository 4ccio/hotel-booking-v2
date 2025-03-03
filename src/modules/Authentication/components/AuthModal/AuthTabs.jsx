import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import SignInCard from "../SignIn/CardSignIn";
import SignUpCard from "../SignUp/CardSignUp";
import { cn } from "@/lib/utils";

const AuthTabs = ({ className }) => {
  return (
    <Tabs defaultValue="signIn" className={cn("pt-6", className)}>
      <TabsList className="sticky top-0 z-10 mb-1 grid h-fit w-full grid-cols-2">
        <TabsTrigger value="signIn" className="rounded-lg py-1">
          <span className="text-base font-semibold">Войти</span>
        </TabsTrigger>
        <TabsTrigger value="signUp" className="rounded-lg">
          <span className="text-base font-semibold">Создать аккаунт</span>
        </TabsTrigger>
      </TabsList>

      <div className="max-h-[calc(100vh-140px)] overflow-y-auto">
        <TabsContent value="signIn">
          <SignInCard />
        </TabsContent>
        <TabsContent value="signUp">
          <SignUpCard />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default AuthTabs;
