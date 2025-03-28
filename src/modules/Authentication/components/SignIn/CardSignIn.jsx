import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormSignIn from "./FormSignIn";
import AlertError from "@/components/AlertError";
import AlertSuccess from "@/components/AlertSuccess";

const SignInCard = ({ successMessage, errorMessage, ...props }) => {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-center">Вход</CardTitle>
        <CardDescription className="text-center">
          <p>Введите свои данные для входа в учетную запись.</p>
          {errorMessage && (
            <div className="flex w-full items-center justify-center pt-2">
              <AlertError>{errorMessage}</AlertError>
            </div>
          )}
          {successMessage && (
            <div className="flex w-full items-center justify-center pt-2">
              <AlertSuccess>{successMessage}</AlertSuccess>
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignIn {...props} />
      </CardContent>
    </Card>
  );
};

export default SignInCard;
