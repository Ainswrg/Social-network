import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message';

const Dialogs = (props) => {
   let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

   return (
      <div className={s.dialogs}>
         <div className={s.dialog + ' ' + s.active}>
            {dialogsElements}
         </div>
         <Message
            dialogPage={props.dialogPage}
            addMessage={props.addMessage}
            updateNewMessageText={props.updateNewMessageText} 
            />
      </div >
   )
}

export default Dialogs;