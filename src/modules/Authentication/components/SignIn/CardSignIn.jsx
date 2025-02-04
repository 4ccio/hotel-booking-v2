import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import FormSignIn from "./FormSignIn";

const SignInCard = ({}) => {
  const [showError, setshowError] = useState("");

  return (
    <Card className="bg-background">
      <CardHeader>
        <CardTitle className="text-center">Вход</CardTitle>
        <CardDescription className="text-center">
          <p>Введите свои данные для входа в учетную запись.</p>
          {showError && <p className="text-warning-text">{showError}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormSignIn setParentError={setshowError} />
      </CardContent>
    </Card>
  );
};

export default SignInCard;
