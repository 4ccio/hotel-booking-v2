import { Input } from "@/ui/input";
import InputMask from "react-input-mask";

const InputPhoneMask = ({ className }) => {
  return (
    <InputMask mask="+7 (999) 999-99-99">
      {() => <Input className={className} placeholder="+7"></Input>}
      {/* <Input className={className} placeholder="+7"></Input> */}
    </InputMask>
  );
};

export default InputPhoneMask;
