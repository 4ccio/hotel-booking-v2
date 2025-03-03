import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormSignUp from "./FormSignUp";

const SignUpCard = ({}) => {
  const [showError, setshowError] = useState("");

  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-center">Регистрация</CardTitle>
        <CardDescription className="text-center">
          <p>Введите свои данные для создания учётной записи.</p>
          {showError && <p className="text-warning-text">{showError}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignUp setParentError={setshowError} />
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
