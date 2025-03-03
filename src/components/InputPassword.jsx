import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputPassword = forwardRef(({ className, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  return (
    <div className="relative">
      <Input
        type={isVisible ? "text" : "password"}
        className={cn(`pe-8`, className)}
        ref={ref}
        {...props}
      ></Input>
      <Button
        onClick={toggleVisibility}
        type="button"
        variant="icon"
        className="absolute inset-y-0 end-0 flex size-2 h-full items-center justify-center text-muted-foreground hover:text-foreground"
        aria-label={isVisible ? "Скрыть пароль" : "Показать пароль"}
        aria-pressed={isVisible}
        aria-controls="пароль"
      >
        {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
      </Button>
    </div>
  );
});

InputPassword.displayName = "InputPassword";

export default InputPassword;
