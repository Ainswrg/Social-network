import React from "react";
import { useField } from "formik";
import FormikErrorMessage from "../FormikErrorMessage/FormikErrorMessage";
import { StyledFlex } from "../../Styles";
const FormikField = ({label, ...props}) => {

   const [field] = useField(props);

   return (
      <StyledFlex>
         <label htmlFor={props.id || props.name}>{label}</label>
         {props.type === 'textarea' && 
            <textarea className="text-area" {...field} {...props} />}
         {props.type !== 'textarea' &&
            <input {...field} {...props} />}
            <FormikErrorMessage name={props.name} />
      </StyledFlex>
   );
};

export default FormikField;
