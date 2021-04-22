import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../../Redux/dialog-reducer';


import s from './MessageInput.module.css';


const MessageInput = (props) => {
   
   let state = props.store.getState().dialogPage;
   let newMessageBody = state.newMessageBody;
   
   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
   }
   
   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
   }
   
   return (
      <div className={s.inputBlock}>
         <div>
         <textarea 
            placeholder="Write Message" 
            onChange={onNewMessageChange} 
            value={newMessageBody} 
            className={s.input}></textarea>
         </div>
         <div className={s.button}>
            <button onClick={onSendMessageClick} className={s.btn}>Send</button>
         </div>
      </div>
   )
}

export default MessageInput;