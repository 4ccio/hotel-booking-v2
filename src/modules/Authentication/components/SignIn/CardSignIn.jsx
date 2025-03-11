import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormSignIn from "./FormSignIn";

const SignInCard = () => {
  const error = useSelector((state) => state.auth.error);

  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-center">Вход</CardTitle>
        <CardDescription className="text-center">
          <p>Введите свои данные для входа в учетную запись.</p>
          {error && <p className="text-warning-text">{error}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignIn />
      </CardContent>
    </Card>
  );
};

export default SignInCard;
