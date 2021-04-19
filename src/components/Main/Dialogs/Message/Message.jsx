import React from 'react';
import s from './Message.module.css';
import MessageInput from './MessageInput/MessageInput';
import User from './User/User';
import UserResponder from './UserResponder/UserResponder';


const Message = (props) => {
   let messageData = props.messages.map(m => <UserResponder message={m.message} time={m.time} />);
   let messageUserData = props.messageCurrentUser.map(m => <User message={m.message} time={m.time} />);

   return (
      <div>
         <div className={s.messages} >
            {messageData}
            {messageUserData}
         </div>
         <MessageInput
            newMessageText = {props.newMessageText}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText} />
      </div>
   )
}

export default Message;