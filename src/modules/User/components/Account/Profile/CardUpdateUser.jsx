import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import AlertError from "@/components/AlertError";
import AlertSuccess from "@/components/AlertSuccess";
import FormUpdateUser from "./FormUpdateUser";

const CardUpdateUser = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <Card className="max-w-md bg-background">
      <CardHeader>
        <CardTitle className="text-center">Данные пользователя</CardTitle>
        <CardDescription className="text-center">
          <p>Вы можете внести изменения в данные своей учётной записи.</p>
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
        <FormUpdateUser
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      </CardContent>
    </Card>
  );
};

export default CardUpdateUser;
