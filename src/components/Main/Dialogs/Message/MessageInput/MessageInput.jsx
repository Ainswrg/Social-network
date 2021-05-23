import React from 'react';
import { StyledInputContainer, StyledPostButton, StyledTextArea } from '../../../../Styles';
// import AddMessageForm from './AddMessageForm';
import s from './MessageInput.module.css';


const MessageInput = (props) => {
   let newMessageBody = props.dialogPage.newMessageBody;

   let onSendMessageClick = () => {
      props.sendMessage();
   }
   
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body)
   }
   
   return (
      <StyledInputContainer>
         <div>
            <StyledTextArea
               placeholder="Write Message" 
               onChange={onNewMessageChange} 
               value={newMessageBody} 
               className={s.input}
            >
            </StyledTextArea>
         </div>
         <div>
            <StyledPostButton onClick={onSendMessageClick} >Send</StyledPostButton>
         </div>
      </StyledInputContainer>
      // <AddMessageForm
      //    newMessageBody={newMessageBody}
      //    onSendMessageClick={onSendMessageClick}
      //    onNewMessageChange={onNewMessageChange}
      // />
   )
}



export default MessageInput;