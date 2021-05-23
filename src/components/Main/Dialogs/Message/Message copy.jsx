import React from 'react';
import s from './Message.module.css';
import MessageInput from './MessageInput/MessageInput';
import User from './User/User';
import UserResponder from './UserResponder/UserResponder';



const Message = (props) => {
   let state = props.dialogPage;

   let incomingDataElement = state.incomingMessages.map(m => <UserResponder message={m.message} key={m.id} time={m.time} />);

   let outgoingDataElement = state.outgoingMessages.map(m => <User message={m.message} key={m.id} time={m.time} />);

   return (
      <div>
         <div >
            {incomingDataElement}
            {outgoingDataElement}
         </div>
         <MessageInput
            dialogPage={props.dialogPage}
            sendMessage={props.sendMessage}
            updateNewMessageBody={props.updateNewMessageBody} />
      </div>
   )
}

export default Message;