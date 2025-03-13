import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormSignUp from "./FormSignUp";
// import { useState } from "react";

const SignUpCard = ({ errorMessage, ...props }) => {
  // const [error, setError] = useState("");

  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-center">Регистрация</CardTitle>
        <CardDescription className="text-center">
          <p>Введите свои данные для создания учётной записи.</p>
          {errorMessage && <p className="text-warning-text">{errorMessage}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignUp {...props} />
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
