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
      return <Redirect push to="/profile" />;
   }

   const initialValues = {
      email: "",
      password: "",
      rememberMe: false,
   };


   const onSubmit = (values, actions) => {
      actions.setStatus(undefined);
      console.log("onSubmitProps", actions);
      loggingInThunk(values.email, values.password, values.rememberMe, actions);
   };

   return <LoginForm initialValues={initialValues} onSubmit={onSubmit} />;
};

export default Login;
