import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import FormikField from "../../../../shared/FormikField/FormikField"
import { ChatButton, ChatFooter, StyledIconPaperPlane, StyledIconPlus, StyledPostButton,StyledChatContainer  } from "../../../../Styles";

const validationPost = Yup.object({
   newText: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
})

const ChatForm = (props) => {
   debugger
   return (
      <>
      <Formik
            enableReinitialize
            initialValues={{
               newMessageBody: "",
            }}
            validationSchema={validationPost}
            onSubmit={props.handleSubmit}
         >
            <Form>
            <ChatFooter>
               <div className="sendNewMessage">
            
                  {/* <ChatButton >
                     <StyledIconPlus/>
                  </ChatButton> */}
                  <FormikField
                     type="text"
                     placeholder="Type a message here"
                     // onChange={this.onStateChange}
                     // value={this.state.msg}
                     label="New Message"
                     name="newMessageBody"
                     rows="3"
                     className='field'
                  />
                  {/* onClick={this.onSendMessageClick} */}
                  <ChatButton type="submit" id="sendMsgBtn">
                     <StyledIconPaperPlane/>
                  </ChatButton>
                  {/* <StyledPostButton type="submit">Submit</StyledPostButton> */}
               
               </div>
            </ChatFooter>
            </Form>
         </Formik>
      </>
   )
}

export default ChatForm;