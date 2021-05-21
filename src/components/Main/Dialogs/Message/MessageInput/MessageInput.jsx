import React from 'react';
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
      // <AddMessageForm
      //    newMessageBody={newMessageBody}
      //    onSendMessageClick={onSendMessageClick}
      //    onNewMessageChange={onNewMessageChange}
      // />
   )
}



export default MessageInput;