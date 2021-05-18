import React from "react";
import { useFormik } from "formik";
import s from "./Login.module.css";
import loginFormValidation from "./FormValidation/LoginFormSchema";

const initialValues = {
   email: "",
   password: "",
   rememberMe: false,
};

// const onSubmit = (values) => {console.log("Form data", values)};

const validationSchema = loginFormValidation;


function LoginForm(values) {
   const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => console.log(JSON.stringify(values, null, 4)),
   });

   // console.log("Visited field", formik.touched);

   return (
      <form onSubmit={formik.handleSubmit}>
         <div style={{ padding: 20 }}>
            <div className={s.formControl}>
               <label htmlFor="email">E-mail</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
               />

               {formik.errors.email && (
                  <div className={s.error}>{formik.errors.email}</div>
               )}
            </div>

            <div className={s.formControl}>
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
               />

               {formik.errors.password && (
                  <div className={s.error}>{formik.errors.password}</div>
               )}
            </div>

            <div className={s.formControl}>
               <label htmlFor="rememberMe">remember me</label>
               <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultChecked={formik.values.rememberMe}
               />
            </div>

            <button
               
               // type="sumbit"
            >
               Submit
            </button>
         </div>
         {/* <pre>{JSON.stringify(formik, null, 4)}</pre> */}
      </form>
   );
}

export default LoginForm;