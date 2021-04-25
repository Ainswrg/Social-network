import React from 'react';
import StoreContext from '../../../StoreContext';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/dialog-reducer';

const DialogsContainer = (props) => {

   return (
      <StoreContext.Consumer>
         { store => {
            let state = store.getState().dialogPage;

            let onSendMessageClick = () => {
               store.dispatch(sendMessageCreator());
            }
            let onNewMessageChange = (body) => {
               store.dispatch(updateNewMessageBodyCreator(body));
            }

            return <Dialogs
               store={store}
               sendMessage={onSendMessageClick}
               updateNewMessageBody={onNewMessageChange}/>
         }}
      </StoreContext.Consumer>
   )
}

export default DialogsContainer;