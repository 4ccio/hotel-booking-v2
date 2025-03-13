import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormSignIn from "./FormSignIn";

const SignInCard = ({ successMessage, errorMessage, ...props }) => {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-center">Вход</CardTitle>
        <CardDescription className="text-center">
          {successMessage && (
            <p className="text-success-text">{successMessage}</p>
          )}
          <p>Введите свои данные для входа в учетную запись.</p>
          {errorMessage && <p className="text-warning-text">{errorMessage}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignIn {...props} />
      </CardContent>
    </Card>
  );
};

export default SignInCard;
