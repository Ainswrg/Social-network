import React from "react";
import { useField } from "formik";
import FormikErrorMessage from "../FormikErrorMessage/FormikErrorMessage";
// import { StyledFlex } from "../../Styles";

interface MyFormValues {
   label?: string
   statusProfile?: any
   statusLogin?: any
   type: string
   name: string
   id?: string
   checkbox?: any
   placeholder: string
}

const FormikField: React.FC<MyFormValues> = ({ label, statusProfile, statusLogin, ...props }) => {
   const [field] = useField(props);
   return (
      <>
         {props.type !== "textarea" && <input   {...field} {...props} />}
         <label htmlFor={props.id || props.name}>{label}</label>
         {props.type === "textarea" && <textarea {...field} {...props} />}
         <div style={{height: '20px'}}>
            <FormikErrorMessage
               name={props.name}
               statusLogin={statusLogin}
               statusProfile={statusProfile}
            />
         </div>
         
      </>
   );
};

export default FormikField;
