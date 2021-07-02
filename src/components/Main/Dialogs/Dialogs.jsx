import React from 'react';
import { StyledWrapper } from '../../Styles';
import ChatContent from "./Message/chatContent/ChatContent";
import ChatList from './Message/chatList/ChatList';
// import DialogItem from './DialogItem/DialogItem.jsx'


const Dialogs = (props) => {
   // let state = props.dialogPage;
   // let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
   
   // if(props.isAuth) return <Redirect to={'/login'}/>
   return (
      <StyledWrapper flex={"flex"}>
                  {/* <div >
                  {dialogsElements}
                  </div> */}
                  <ChatList />
                  <ChatContent
                     sendMessage={props.sendMessage}
                     dialogPage={props.dialogPage}
                  />
      </StyledWrapper >
   )
}

export default Dialogs;