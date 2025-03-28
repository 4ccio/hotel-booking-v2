import { Button } from "@/ui/button";
import AlertError from "./AlertError";
import { House } from "lucide-react";
import { Link } from "react-router";

const ErrorScreen = ({ ...props }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="rounded-md border border-border p-6 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <AlertError {...props}></AlertError>
          <Link to={"/"}>
            <Button variant="outline" size="sm">
              <House size={16} />
              На главную
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;
