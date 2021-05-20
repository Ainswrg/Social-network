import React from 'react';
import s from './MessageInput.module.css';

const AddMessageForm = (props) => {
   return (
      <div className={s.inputBlock}>
         <div>
         <textarea 
            placeholder="Write Message" 
            onChange={props.onNewMessageChange} 
            value={props.newMessageBody} 
            className={s.input}></textarea>
         </div>
         <div className={s.button}>
            <button onClick={props.onSendMessageClick} className={s.btn}>Send</button>
         </div>
      </div>
   )
}

export default AddMessageForm