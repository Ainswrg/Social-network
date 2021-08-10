import React from 'react';
import { Form, Formik } from "formik";
import FormikField from "../shared/FormikField/FormikField";
import { ButtonGroup,  StyledLogin, CheckBox, StyledPreloader } from "./Styles";
import loginFormSchema from "./FormValidation/LoginFormSchema";


interface InitialType {
   email: string,
   password: string,
   rememberMe: boolean
}
interface PropsType {
   initialValues: InitialType
   onSubmit: any
}
interface OtherProps {
   captchaUrl: string | null
}

const LoginForm:React.FC<PropsType & OtherProps> = ({initialValues,onSubmit, captchaUrl}) => {
   return (
      <Formik
         enableReinitialize
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={loginFormSchema}
      >
         {({ status, isSubmitting, touched, dirty, ...props }) => (
            <StyledLogin>
               <Form>
                  <div className={"user_box"}>
                     <FormikField
                        label="Email" 
                        name="email" 
                        type="text"
                        statusLogin={status}
                        autoComplete="off"
                        required
                     />
                  </div>
                  <div className={"user_box"}>
                     <FormikField
                        label="Password"
                        name="password"
                        type="password"
                        statusLogin={status}
                        required
                     />
                  </div>
                  <CheckBox>
                     <FormikField
                        label="Remember Me"
                        name="rememberMe"
                        type="checkbox"
                     />
                  </CheckBox>

                  {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                  {captchaUrl && 
                  <div className={"user_box"}>
                     <FormikField   name="captcha" 
                     type="text" placeholder="write symbols from image"/>
                  </div>}

                  <ButtonGroup>
                     {!isSubmitting && (
                        <button>
                           <span></span>
                           <span></span>
                           <span></span>
                           <span></span>
                           Sign In
                        </button>
                     )}
                     {isSubmitting && (
                        <StyledPreloader>
                           <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        </StyledPreloader>
                     )}
                  </ButtonGroup>
               </Form>
            </StyledLogin>
         )}
      </Formik>
   );
};

export default LoginForm;
