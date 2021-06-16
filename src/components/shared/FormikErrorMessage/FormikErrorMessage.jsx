import React from "react";
import { ErrorMessage } from "formik";
import { StyledError } from "../../Styles";

const FormikErrorMessage = ({ name, statusProfile, statusLogin }) => {
   function findError() {
      let error = statusProfile;
      let match = error.match(/Invalid url format \(Contacts->(.+)\)/);
      if (match) {
         let fieldName = match[1].toLowerCase();
         return fieldName;
      }
   }

   return statusProfile ? (
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
   );
};

export default FormikErrorMessage;
