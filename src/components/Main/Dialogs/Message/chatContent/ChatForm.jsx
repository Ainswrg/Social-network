import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikField from "../../../../shared/FormikField/FormikField";
import {
   ChatButton,
   StyledIconPaperPlane,
   StyledIconPlus,
   ChatFormContainer,
   StyledField
} from "../../../../Styles";

const validationPost = Yup.object({
   newMessageBody: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
});

const ChatForm = (props) => {
   return (
      <>
         <Formik
            enableReinitialize
            initialValues={{
               newMessageBody: "",
            }}
            validationSchema={validationPost}
            onSubmit={props.addNewMessage}
         >
               <Form>
                  <ChatFormContainer>
                        <ChatButton>
                           <StyledIconPlus />
                        </ChatButton>
                        
                        <StyledField>
                        
                           <FormikField
                              type="textarea"
                              placeholder="Type a message here"
                              name="newMessageBody"
                           />
                        </StyledField>
                        
                        <ChatButton id="sendMsgBtn">
                           <StyledIconPaperPlane />
                        </ChatButton>
                  </ChatFormContainer>
               </Form>
         </Formik>
      </>
   );
};

export default ChatForm;
