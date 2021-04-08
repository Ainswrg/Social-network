import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message';

const Dialogs = (props) => {
   let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messageData = props.state.messages.map(m => <Message message={m.message} />);

let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value;
      alert(text);
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialog + ' ' + s.active}>
            {dialogsElements}
         </div>
         <div className={s.messages} >
            {messageData}
            <div className={s.input__block}>
               <textarea ref={newPostElement} className={s.input}></textarea>
               <div className={s.button}>
                  <button onClick={addPost} className={s.btn}>Send</button>
               </div>
            </div>

         </div>

      </div >
   )
}

export default Dialogs;