import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message';
import { StyledDialogContainer, StyledDialogContent, StyledDialogBody } from '../../Styles';
import ChatContent from "./Message/chatContent/ChatContent";
import ChatList from './Message/chatList/ChatList';

const Dialogs = (props) => {
   let state = props.dialogPage;
   let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);

   // if(props.isAuth) return <Redirect to={'/login'}/>

   return (
      <StyledDialogContainer>
                  {/* <div >
                  {dialogsElements}
                  </div> */}
                  <ChatList />
                  <ChatContent
                     dialogPage={props.dialogPage}
                     sendMessage={props.sendMessage}
                     updateNewMessageBody={props.updateNewMessageBody} 
                  />
      </StyledDialogContainer >
   )
}

export default Dialogs;