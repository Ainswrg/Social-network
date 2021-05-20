import React from 'react';
import AddMessageForm from './AddMessageForm';
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
      <AddMessageForm
         newMessageBody={newMessageBody}
         onSendMessageClick={onSendMessageClick}
         onNewMessageChange={onNewMessageChange}
      />
   )
}



export default MessageInput;