import React from "react";
import { login } from "../../Redux/auth-reducer";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import { Redirect } from "react-router";

const Login = () => {
   const state = useSelector((state) => state);
   const dispatch = useDispatch();
   const loggingInThunk = (email, password, rememberMe, actions) =>
      dispatch(login(email, password, rememberMe, actions));

   const { isAuth } = state.auth;
   if (isAuth) {
      return <Redirect to="/profile" />;
   }

   const onSubmit = (values, actions) => {
      actions.setStatus(undefined);
      loggingInThunk(values.email, values.password, values.rememberMe, actions);
   };

   const initialValues = {
      email: "",
      password: "",
      rememberMe: false,
   };

   return <LoginForm initialValues={initialValues} onSubmit={onSubmit} />;
};

export default Login;
