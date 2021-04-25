import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/dialog-reducer';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {

//    return (
//       <StoreContext.Consumer>
//          { store => {
//             let state = store.getState().dialogPage;

//             let onSendMessageClick = () => {
//                store.dispatch(sendMessageCreator());
//             }
//             let onNewMessageChange = (body) => {
//                store.dispatch(updateNewMessageBodyCreator(body));
//             }

//             return <Dialogs
//                store={store}
//                sendMessage={onSendMessageClick}
//                updateNewMessageBody={onNewMessageChange}/>
//          }}
//       </StoreContext.Consumer>
//    )
// }

let mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: () => {
         dispatch(sendMessageCreator());
      },
      sendMessage: (body) => {
         dispatch(updateNewMessageBodyCreator(body))
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;