import React from "react";
import { Field, useField } from "formik";
import FormikErrorMessage from "../FormikErrorMessage/FormikErrorMessage";
import s from './FormikField.module.css';
import { StyledError } from "../../Styles";
// name, type, 
const FormikField = ({label, ...props}) => {

   const [field, meta] = useField(props);
   debugger
   return (
      <div className={s.formControl}>
         <label htmlFor={props.id || props.name}>{label}</label>
         {props.type === 'textarea' && 
            <textarea className="text-area" {...field} {...props} />}
         {props.type !== 'textarea' &&
            <input className="input" {...field} {...props} />}
         
      <FormikErrorMessage name={props.name} />
      </div>
   );
   // return (
   //    <Field name={name}>
   //       {(formikField) => {
   //          return (
   //             <div className={s.formControl}>
   //                <label htmlFor={name} style={{ display: "block" }}>
   //                   {label}
   //                </label>
   //                <input
   //                   type={type}
   //                   id={name}
   //                   {...formikField.field}
   //                   defaultChecked={formikField.field.value}
   //                />
   //                <FormikErrorMessage name={name} />
   //                {/* <pre>{JSON.stringify(formikField, null, 4)}</pre> */}
   //             </div>
   //          );
   //       }}
   //    </Field>
   // );
};

export default FormikField;
