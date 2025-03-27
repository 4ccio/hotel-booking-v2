import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormSignUp from "./FormSignUp";
import AlertError from "@/components/AlertError";

const SignUpCard = ({ errorMessage, ...props }) => {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-center">Регистрация</CardTitle>
        <CardDescription className="text-center">
          <p>Введите свои данные для создания учётной записи.</p>
          {errorMessage && (
            <div className="flex w-full items-center justify-center pt-2">
              <AlertError>{errorMessage}</AlertError>
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignUp {...props} />
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
