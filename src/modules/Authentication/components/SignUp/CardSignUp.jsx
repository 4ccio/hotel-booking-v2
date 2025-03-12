import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormSignUp from "./FormSignUp";
import { useSelector } from "react-redux";

const SignUpCard = ({ ...props }) => {
  const error = useSelector((state) => state.auth.registerError);

  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-center">Регистрация</CardTitle>
        <CardDescription className="text-center">
          <p>Введите свои данные для создания учётной записи.</p>
          {error && <p className="text-warning-text">{error}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignUp {...props} />
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
