import { Input } from "@/ui/input";
import { forwardRef } from "react";
import InputMask from "react-input-mask";

const InputPhoneMask = forwardRef(({ className, ...props }, ref) => {
  return (
    <InputMask mask="+7 (999) 999-99-99" {...props}>
      {() => <Input className={className} placeholder="+7" ref={ref}></Input>}
    </InputMask>
  );
});

InputPhoneMask.displayName = "InputPhoneMask";

export default InputPhoneMask;
