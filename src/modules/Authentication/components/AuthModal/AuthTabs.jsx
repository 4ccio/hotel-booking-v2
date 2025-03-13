import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import SignInCard from "../SignIn/CardSignIn";
import SignUpCard from "../SignUp/CardSignUp";
import { cn } from "@/lib/utils";

const SIGN_IN = "signIn";
const SIGN_UP = "signUp";

const AuthTabs = ({
  className,
  activeTab,
  handleTabsChange,
  successMessage,
  onSignInSuccess,
  onSignUpSuccess,
  ...props
}) => {
  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabsChange}
      defaultValue={activeTab}
      className={cn("pt-6", className)}
    >
      <TabsList className="sticky top-0 z-10 mb-1 grid h-fit w-full grid-cols-2">
        <TabsTrigger value={SIGN_IN} className="rounded-lg py-1">
          <span className="text-base font-semibold">Войти</span>
        </TabsTrigger>
        <TabsTrigger value={SIGN_UP} className="rounded-lg py-1">
          <span className="text-base font-semibold">Создать аккаунт</span>
        </TabsTrigger>
      </TabsList>

      <div className="max-h-[calc(100vh-140px)] overflow-y-auto">
        <TabsContent value={SIGN_IN}>
          <SignInCard
            successMessage={successMessage}
            onSignInSuccess={onSignInSuccess}
            {...props}
          />
        </TabsContent>
        <TabsContent value={SIGN_UP}>
          <SignUpCard onSignUpSuccess={onSignUpSuccess} {...props} />
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default AuthTabs;
