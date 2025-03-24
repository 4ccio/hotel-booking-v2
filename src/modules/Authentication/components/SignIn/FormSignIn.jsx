// import { useDispatch, useSelector } from "react-redux";
// import { LoaderCircle } from "lucide-react";
// import { useForm, Controller } from "react-hook-form";
// import { Label } from "@/ui/label";
// import { Button } from "@/ui/button";
// import { formFields, pickFormFields } from "../../constants/formFields";
// import { loginUser } from "../../store/thunks";
// import { fetchUser } from "@/modules/User";

// const loginFields = pickFormFields(formFields, ["phoneNumber", "password"]);

// const FormSignIn = ({ setErrorMessage, onSignInSuccess }) => {
//   const {
//     handleSubmit,
//     formState: { errors },
//     control,
//   } = useForm({
//     defaultValues: Object.fromEntries(
//       loginFields.map(({ name }) => [name, ""]),
//     ),
//   });

//   const isLoading = useSelector((state) => state.auth.isLoading);
//   const dispatch = useDispatch();

//   const handleFormSubmit = async (data) => {
//     const resultAction = await dispatch(loginUser(data));

//     if (loginUser.fulfilled.match(resultAction)) {
//       await dispatch(fetchUser());
//       onSignInSuccess();
//     } else if (loginUser.rejected.match(resultAction)) {
//       setErrorMessage(resultAction.payload);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(handleFormSubmit)}>
//       <div className="mb-6 flex flex-col gap-4">
//         {loginFields.map(
//           ({
//             name,
//             label,
//             rules,
//             inputComponent: Input,
//             icon,
//             optional,
//             sanitizers,
//           }) => (
//             <div key={name}>
//               <div className="mb-0.5 flex items-center justify-between">
//                 <Label htmlFor={name}>{label}</Label>
//                 {errors[name] ? (
//                   <span className="text-sm text-warning-text">
//                     {errors[name].message}
//                   </span>
//                 ) : optional ? (
//                   <span className="text-sm text-muted-foreground">
//                     необязательно
//                   </span>
//                 ) : null}
//               </div>
//               <Controller
//                 name={name}
//                 control={control}
//                 rules={rules}
//                 render={({ field }) => (
//                   <Input
//                     id={name}
//                     {...field}
//                     {...(icon ? { icon } : {})}
//                     onChange={(e) => {
//                       let newValue = e.target.value;
//                       if (sanitizers) {
//                         sanitizers.forEach((sanitize) => {
//                           newValue = sanitize(newValue);
//                         });
//                       }
//                       field.onChange(newValue);
//                     }}
//                   />
//                 )}
//               />
//             </div>
//           ),
//         )}
//       </div>
//       <Button disabled={isLoading} type="submit" className="w-full">
//         {isLoading ? <LoaderCircle size={16} className="animate-spin" /> : null}
//         Войти
//       </Button>
//     </form>
//   );
// };

// export default FormSignIn;
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/thunks";
import { fetchUser } from "@/modules/User";
import { formFields, pickFormFields } from "../../constants/formFields";
import AuthForm from "../AuthForm";

const loginFields = pickFormFields(formFields, ["phoneNumber", "password"]);

const FormSignIn = ({ setErrorMessage, onSignInSuccess }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleFormSubmit = async (data) => {
    const resultAction = await dispatch(loginUser(data));

    if (loginUser.fulfilled.match(resultAction)) {
      await dispatch(fetchUser());
      onSignInSuccess();
    } else if (loginUser.rejected.match(resultAction)) {
      setErrorMessage(resultAction.payload);
    }
  };

  return (
    <AuthForm
      fields={loginFields}
      onSubmit={handleFormSubmit}
      submitText="Войти"
      isLoading={isLoading}
    />
  );
};

export default FormSignIn;
