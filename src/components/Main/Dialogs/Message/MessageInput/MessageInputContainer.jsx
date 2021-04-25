// import React from 'react';
// import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../../../Redux/dialog-reducer';
// // import store from '../../../../../Redux/redux-store';
// import StoreContext from '../../../../../StoreContext';
// import MessageInput from './MessageInput';



// const MessageInputContainer = (props) => {


//    return <StoreContext.Consumer> 
//          { store => {
//             let state = store.getState();
//             let onSendMessageClick = () => {
//                store.dispatch(sendMessageCreator());
//             }
//             let onNewMessageChange = (body) => {
//                store.dispatch(updateNewMessageBodyCreator(body));
//             }

//             return <MessageInput
//                onSendMessageClick={onSendMessageClick}
//                updateNewMessageBody={onNewMessageChange}
//                newMessageBody={state.newMessageBody} />
//          }
//       }
//       </StoreContext.Consumer>
// }

// export default MessageInputContainer;