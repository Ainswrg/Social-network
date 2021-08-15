import { login } from "../../Redux/auth-reducer";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router";
import { AppStateType } from "../../Redux/redux-store";
import { FormikHelpers } from "formik";

export type InitialStateType = {
   email: string 
   password: string 
   rememberMe: boolean 
   captcha: string
}


const Login = () => {
   const state = useSelector((state: AppStateType) => state);
   const dispatch = useDispatch();
   const loggingInThunk = (email: string, password: string, rememberMe: boolean, captcha: string, actions: any ) =>
      dispatch(login(email, password, rememberMe, captcha, actions));

   

   const { isAuth } = state.auth;
   if (isAuth) {
      return <Redirect to="/profile" />;
   }
   const onSubmit = (values: InitialStateType, {setStatus, setSubmitting}: FormikHelpers<{}>): void => {
      setStatus(undefined);
      loggingInThunk(values.email, values.password, values.rememberMe,values.captcha, {setStatus, setSubmitting});
      state.auth.captchaUrl = null;
   };

   const initialValues: ContactFormFields = {
      email: "",
      password: "",
      rememberMe: false,
   };

   interface ContactFormFields {
      email: string
      password: string
      rememberMe: boolean
   }

   return <LoginForm initialValues={initialValues} onSubmit={onSubmit} captchaUrl={state.auth.captchaUrl}/>;
}
export default Login;
