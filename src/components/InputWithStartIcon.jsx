import { cn } from "@/lib/utils";
import { Input } from "@/ui/input";
import { PencilLine as DefaultIcon } from "lucide-react";
import { forwardRef } from "react";

const InputWithStartIcon = forwardRef(
  ({ className, icon: Icon = DefaultIcon, ...props }, ref) => {
    return (
      <div className="relative">
        <Input className={cn(`ps-8`, className)} ref={ref} {...props}></Input>
        <div className="pointer-events-none absolute inset-y-0 start-0 flex h-full items-center justify-center ps-2 text-muted-foreground">
          <Icon size={16} />
        </div>
      </div>
    );
  },
);

InputWithStartIcon.displayName = "InputWithStartIcon";

export default InputWithStartIcon;
