import * as Yup from 'yup';

const loginFormSchema = Yup.object().shape({
   email: Yup.string()
      .email("Please enter a valid email address")
      .required(),
   password: Yup.string()
      .min(8)
      // .max(20)
      // .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
      .required(),
});
export default loginFormSchema;
