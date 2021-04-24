import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../../Redux/dialog-reducer';
import MessageInput from './MessageInput';



const MessageInputContainer = (props) => {
   
   let state = props.store.getState().dialogPage;

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
   }
   
   let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body));
   }
   
   return (
      <MessageInput 
      onSendMessageClick={onSendMessageClick}
      updateNewMessageBody={onNewMessageChange}
      newMessageBody={state.newMessageBody}
      />
   )
}

export default MessageInputContainer;