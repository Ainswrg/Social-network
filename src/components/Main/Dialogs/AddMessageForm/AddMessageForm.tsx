import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikField from "../../../shared/FormikField/FormikField";
import { StyledContainer, StyledField, StyledIconPaperPlane, ChatButton } from "../Styles";
import { initialType } from "../Dialogs";


interface PropsType {
  onSubmit: any;
  initialValues: initialType;
}

const validationPost = Yup.object({
  newMessageBody: Yup.string()
     .max(15, "Must be 15 characters or less")
     .required("Required"),
});

const AddMessageForm: React.FC<PropsType> = ({
  onSubmit,
  initialValues,
}: any) => {
  return (
    <>
      <Formik 
        onSubmit={onSubmit} 
        initialValues={initialValues}
        validationSchema={validationPost}
      >
        <Form>
          <StyledField>
            <StyledContainer width="100%">
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
