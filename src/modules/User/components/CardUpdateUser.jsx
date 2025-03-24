import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormUpdateUser from "./FormUpdateUser";
import { useState } from "react";

const SignInCard = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <Card className="max-w-lg bg-background">
      <CardHeader>
        <CardTitle className="text-center">Данные пользователя</CardTitle>
        <CardDescription className="text-center">
          <p>Вы можете внести изменения в данные своей учётной записи.</p>
          {errorMessage && <p className="text-warning-text">{errorMessage}</p>}
          {successMessage && (
            <p className="text-success-text">{successMessage}</p>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormUpdateUser
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      </CardContent>
    </Card>
  );
};

export default SignInCard;
