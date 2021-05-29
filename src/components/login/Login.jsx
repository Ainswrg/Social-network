import React from "react";
import { Formik, Form } from "formik";
import s from "./Login.module.css";
import FormikField from "../shared/FormikField/FormikField";
import loginFormSchema from './FormValidation/LoginFormSchema';
import authReducer, { login, getAuthUserData } from '../../Redux/auth-reducer';
import {useDispatch} from "react-redux";
import { ButtonGroup, StyledLogin, colors } from "../Styles";
import Loader from "react-loader-spinner";
import { compose } from "redux";
import { withAuthRedirectFromLogin } from "../../hoc/withAuthRedirectFromLogin";

const Login = (props) => {
   const dispatch = useDispatch();
   const loggingInThunk = (email, password, rememberMe) => dispatch(login(email, password, rememberMe));

   const initialValues = {
      email: '',
      password: '',
      rememberMe: false,
   };
   
   const onSubmit = (values) => {
      console.log("form data", values)
      loggingInThunk(values.email, values.password, values.rememberMe);
   }
   
   const validationSchema = loginFormSchema;
   
   // if(authReducer) console.log(1)

   return (
      <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema = {validationSchema}
      >
         {({ isSubmitting, isAuth }) => (
               <StyledLogin>
                  
                     <Form>
                     {/* <div className={s.form}> */}
                     
                        <FormikField label="Email" name="email" type="email" />
                        <FormikField label="Password" name="password" type="password" />
                        <FormikField label="Remember Me" name="rememberMe" type="checkbox"
                        />
                        <ButtonGroup>
                           {!isSubmitting && (
                              <button btn btn-green>Sign In</button>
                              
                           )}
                           {isSubmitting && (
                              <Loader
                              type="ThreeDots"
                              color={colors.theme}
                              height={49}
                              width={100}
                              />
                           )}
                        </ButtonGroup>
                  </Form>
               </StyledLogin>
            )
         }
      </Formik>
   )
}


export default compose(
   withAuthRedirectFromLogin,
)(Login);






















// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import s from "./Login.module.css";
// import loginFormValidation from "./FormValidation/LoginFormSchema";


// const LoginFormikComponents = () => {
//    const initialValues = {
//       email: "",
//       password: "",
//       rememberMe: false,
//    };
//    const onSubmit = (values) => console.log(JSON.stringify(values, null, 4));
//    const validationSchema = loginFormValidation;

//    return (
//       <Formik
//          initialValues={initialValues}
//          onSubmit={onSubmit}
//          // onSubmit={({ setSubmitting }) => {
//          //    alert("Form is validated! Submitting the form...");
//          //    setSubmitting(false);
//          // }}
//          validationSchema={validationSchema}
//       >
         
//          {(formik) => {
//             return (
//                <Form>
//                   <div style={{ padding: 20 }}>
//                      <Field name="email">
//                         {(formikField) => {
//                            return (
//                               <div className={s.formControl}>
//                                  <label htmlFor="email">E-mail</label>
//                                  <input
//                                     type="email"
//                                     id="email"
//                                     {...formikField.field}
//                                  />
//                                  <ErrorMessage name="password">
//                                     {errMessage => {
//                                        return (
//                                        <div className={s.error}>{errMessage}</div>
//                                        );
//                                     }}
//                                  </ErrorMessage>
//                                  {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
//                               </div>
//                            );
//                         }}
//                      </Field>

//                      <Field name="password">
//                         {(formikField) => {
//                            return (
//                               <div className={s.formControl}>
//                                  <label htmlFor="password">Password</label>
//                                  <input
//                                     type="password"
//                                     id="password"
//                                     {...formikField.field}
//                                  />
//                                  <ErrorMessage name="password">
//                                     {errMessage => {
//                                        return (
//                                        <div className={s.error}>{errMessage}</div>
//                                        );
//                                     }}
//                                  </ErrorMessage>
//                                  {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
//                               </div>
//                            );
//                         }}
//                      </Field>

//                      <Field name="rememberMe">
//                         {(formikField) => {
//                            return (
//                               <div className={s.formControl}>
//                                  <label htmlFor="rememberMe">remember me</label>
//                                  <input
//                                     type="checkbox"
//                                     id="rememberMe"
                                    
//                                     defaultChecked={formikField.field.value}
//                                     {...formikField.field}
//                                  />
//                                  {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
//                               </div>
//                            );
//                         }}
//                      </Field>

//                      <button type='submit'>
//                         Submit
//                      </button>
//                   </div>
//                   <pre>{JSON.stringify(formik, null, 4)}</pre>
//                </Form>
//             );
//          }}
//       </Formik>
//    );
// };
// export default LoginFormikComponents;
