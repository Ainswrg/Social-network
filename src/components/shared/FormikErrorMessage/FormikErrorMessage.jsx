import React from "react";
import { ErrorMessage } from "formik";
import s from "./FormikErrorMessage.module.css";

const FormikErrorMessage = ({ name }) => {
   return (
      <ErrorMessage name={name}>
         {(errMessage) => {
            return <div className={s.error}>{errMessage}</div>;
         }}
      </ErrorMessage>
   );
};

export default FormikErrorMessage;
