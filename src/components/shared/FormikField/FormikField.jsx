import React from "react";
import { Field } from "formik";
import FormikErrorMessage from "../FormikErrorMessage/FormikErrorMessage";
import s from './FormikField.module.css';

const FormikField = ({ name, type, label}) => {

   return (
      <Field name={name}>
         {(formikField) => {
            return (
               <div className={s.formControl}>
                  <label htmlFor={name} style={{ display: "block" }}>
                     
                     {label}
                  </label>
                  <input
                     type={type}
                     id={name}
                     {...formikField.field}
                     defaultChecked={formikField.field.value}
                  />
                  <FormikErrorMessage name={name} />
                  {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
               </div>
            );
         }}
      </Field>
   );
};

export default FormikField;
