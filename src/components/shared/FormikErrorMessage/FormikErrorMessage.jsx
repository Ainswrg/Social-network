import React from "react";
import { ErrorMessage } from "formik";
import { StyledError } from "../../Styles";

const FormikErrorMessage = ({ name }) => {
   return (
      <ErrorMessage name={name}>
         {(errMessage) => {
            return <StyledError>{errMessage}</StyledError>
         }}
      </ErrorMessage>
   );
};

export default FormikErrorMessage;
