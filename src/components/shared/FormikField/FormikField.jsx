import React from "react";
import { useField } from "formik";
import FormikErrorMessage from "../FormikErrorMessage/FormikErrorMessage";
import { StyledFlex } from "../../Styles";
const FormikField = ({ label, statusProfile, statusLogin, ...props }) => {
   const [field] = useField(props);
   return (
      <StyledFlex>
         <label htmlFor={props.id || props.name}>{label}</label>
         {props.type === "textarea" && <textarea {...field} {...props} />}
         {props.type !== "textarea" && <input {...field} {...props} />}
         {props.type === "checkbox" && <checkbox {...field} {...props} />}
         <FormikErrorMessage
            name={props.name}
            statusLogin={statusLogin}
            statusProfile={statusProfile}
         />
      </StyledFlex>
   );
};

export default FormikField;
