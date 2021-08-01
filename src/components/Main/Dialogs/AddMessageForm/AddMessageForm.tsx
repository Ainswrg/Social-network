import React from "react";
import { Form, Formik } from "formik";
import FormikField from "../../../shared/FormikField/FormikField";
import {
  StyledContainer,
  StyledField,
  StyledIconPaperPlane,
  ChatButton,
} from "../Styles";
import { initialType } from "../Dialogs";
import validationPost from "../FormValidation/DialogFormSchema";

interface PropsType {
  onSubmit: any;
  initialValues: initialType;
}

const AddMessageForm: React.FC<PropsType> = ({
  onSubmit,
  initialValues,
}) => {
  return (
   <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationPost}
      >
        <Form>
          <StyledField>
            <StyledContainer width='100%'>
              <FormikField
                name='newMessageBody'
                type='textarea'
                placeholder='enter text'
                // required
                rows={"3"}
              />
            </StyledContainer>
            <ChatButton>
              <StyledIconPaperPlane />
            </ChatButton>
          </StyledField>
        </Form>
      </Formik>
    </>
  );
};

export default AddMessageForm;
