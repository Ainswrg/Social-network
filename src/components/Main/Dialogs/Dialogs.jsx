import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message';

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messageData = props.state.messages.map(m => <Message message={m.message} />);

   return (
      <div className={s.dialogs}>
         <div className={s.dialog + ' ' + s.active}>
            {dialogsElements}
         </div>
         <div className={s.messages } >
               {messageData}
         </div>
      </div >
   )
}

export default Dialogs;