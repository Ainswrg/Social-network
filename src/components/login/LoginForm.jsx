import { Form, Formik } from "formik";
import Loader from "react-loader-spinner";
import FormikField from "../shared/FormikField/FormikField";
import { ButtonGroup, colors, StyledLogin, CheckBox } from "../Styles";
import loginFormSchema from "./FormValidation/LoginFormSchema";

const LoginForm = ({initialValues,onSubmit, captchaUrl}) => {
   return (
      <Formik
         enableReinitialize
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={loginFormSchema}
      >
         {({ status, isSubmitting, touched, dirty, ...props }) => (
            <StyledLogin 
               touched={touched}
               dirty={dirty}
               formik={props}>
               <Form>
                  <div className={"user_box"}>
                     <FormikField
                        label="Email" 
                        name="email" 
                        type="text"
                        statusLogin={status}
                        autocomplete="off"
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

                  {captchaUrl && <img src={captchaUrl} />}
                  {captchaUrl && <FormikField   name="captcha" 
                     type="text" placeholder="write symbols from image"/>}

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
                        <Loader
                           type="ThreeDots"
                           color={colors.blue3}
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
