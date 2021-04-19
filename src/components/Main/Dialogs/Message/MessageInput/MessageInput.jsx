import React from 'react';
import s from './MessageInput.module.css';


const MessageInput = (props) => {
   let newMessageElement = React.createRef();

   let addMessage = () => {
      props.addMessage();
   }
   let messageTextChange = () => {
      let text = newMessageElement.current.value;
      props.updateNewMessageText(text);
   }
   return (
      <div className={s.input__block}>
         <textarea onChange={messageTextChange} ref={newMessageElement} value={props.newMessageText} className={s.input}></textarea>
         <div className={s.button}>
            <button onClick={addMessage} className={s.btn}>Send</button>
         </div>
      </div>
   )
}

export default MessageInput;