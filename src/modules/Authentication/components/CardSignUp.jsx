import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormSignUp from "./FormSignUp";

const SignUpCard = ({}) => {
  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-center">Регистрация</CardTitle>
        <CardDescription className="text-center">
          <p>Введите свои данные для создания учётной записи.</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignUp />
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
