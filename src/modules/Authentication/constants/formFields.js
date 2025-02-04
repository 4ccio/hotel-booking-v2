import { AtSign } from "lucide-react";
import { Input } from "@/ui/input";
import InputPhoneMask from "@/components/InputPhoneMask";
import InputWithStartIcon from "@/components/InputWithStartIcon";
import InputPassword from "@/components/InputPassword";
import { rules, inputRules } from "../validation/validationRules";

export const pickFormFields = (fields, reqiredFileds) =>
  fields.filter((filed) => reqiredFileds.includes(filed.name));

const {
  firstName: { name: firstName, rules: firstNameRules },
  surname: { name: surname, rules: surnameRules },
  patronymic: { name: patronymic, rules: patronymicRules },
  phone: { name: phone, rules: phoneRules },
  password: { name: password, rules: passwordRules },
  telegram: { name: telegram, rules: telegramRules },
} = rules;

const { removeDigits, removeSpaces, onlyDigits } = inputRules;

export const formFields = [
  {
    name: firstName,
    label: "Имя",
    inputComponent: Input,
    rules: firstNameRules,
    sanitizers: [removeSpaces, removeDigits],
  },
  {
    name: surname,
    label: "Фамилия",
    inputComponent: Input,
    rules: surnameRules,
    sanitizers: [removeSpaces, removeDigits],
  },
  {
    name: patronymic,
    label: "Отчество",
    inputComponent: Input,
    rules: patronymicRules,
    optional: true,
    sanitizers: [removeSpaces, removeDigits],
  },
  {
    name: phone,
    label: "Телефон",
    inputComponent: InputPhoneMask,
    rules: phoneRules,
    sanitizers: [onlyDigits],
  },
  {
    name: password,
    label: "Пароль",
    inputComponent: InputPassword,
    rules: passwordRules,
    sanitizers: [removeSpaces],
  },
  {
    name: telegram,
    label: "Телеграм",
    inputComponent: InputWithStartIcon,
    rules: telegramRules,
    icon: AtSign,
    optional: true,
    sanitizers: [removeSpaces],
  },
];
