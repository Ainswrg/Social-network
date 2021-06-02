import { Form, Formik } from 'formik';
import React from 'react';
import Loader from 'react-loader-spinner';
import FormikField from '../shared/FormikField/FormikField';
import { ButtonGroup, colors, StyledLogin } from '../Styles';
import loginFormSchema from './FormValidation/LoginFormSchema';


const LoginForm = (props) => {
   return (
      <Formik
         initialValues={props.initialValues}
         onSubmit={props.onSubmit}
         validationSchema={loginFormSchema}
      >
         {({status, isSubmitting}) => (
            <StyledLogin>
               <Form>
                  <FormikField label="Email" name="email" type="email" />
                  <FormikField
                     label="Password"
                     name="password"
                     type="password"
                  />
                  <FormikField
                     label="Remember Me"
                     name="rememberMe"
                     type="checkbox"
                  />
                  <div className="errorStatus">{status}</div>
                  <ButtonGroup>
                     {!isSubmitting && (
                        <button className="btn btn-green">Sign In</button>
                     )}
                     {isSubmitting && (
                        <Loader
                           type="ThreeDots"
                           color={colors.blue1}
                           height={49}
                           width={100}
                        />
                     )}
                  </ButtonGroup>
               </Form>
            </StyledLogin>
         )}
      </Formik>
   );
};

export default LoginForm;