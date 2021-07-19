import React from "react";
import { ErrorMessage } from "formik";
import { StyledError } from "../../Styles";

type MyFormErrors = {
   name: string
   statusProfile: any
   statusLogin: string
}


const FormikErrorMessage:React.FC<MyFormErrors> = ({ name, statusProfile, statusLogin }) => {
   const findError = ()  => {
      let error = statusProfile;
      let reg = new RegExp(/Invalid url format \(Contacts->(.+)\)/)
      let matchError = error.match(reg) || '1';
      if (matchError) {
         let fieldName = matchError[1].toLowerCase();
         return fieldName;
      }
   }

   return <React.Fragment>
   {statusProfile ? (
      name === `contacts.${findError()}` && (
         <StyledError>{statusProfile}</StyledError>
      )
   ) : statusLogin ? (
      <StyledError>{statusLogin}</StyledError>
   ) : (
      <ErrorMessage name={name}>
         {(errMessage) => {
            return <StyledError>{errMessage}</StyledError>;
         }}
      </ErrorMessage>
   )}
   </React.Fragment>
   
};

export default FormikErrorMessage;
