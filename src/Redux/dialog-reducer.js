const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY =  'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
   dialogs: [
      { id: 1, name: 'Tima' },
      { id: 2, name: 'Anya' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Yura' },
      { id: 5, name: 'Andrey' },
      { id: 6, name: 'Nastya' },
   ],
   newMessageBody: "",
   incomingMessages: [
      { id: 1, message: 'Hello', time: '5:35' },
   ],
   outgoingMessages: [
      { id: 1, message: 'Hi', time: '5:35' },
      { id: 2, message: 'How a u?', time: '5:36' },
   ],
}

const dialogReducer = (state = initialState, action) => {

   switch(action.type) {
      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.outgoingMessages.push({id: 6, message: body, time: '5:37'});
         return state;
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;
      default:
         return state;
   }
}

export const sendMessageCreator = () => ( {type: SEND_MESSAGE} );
export const updateNewMessageBodyCreator = (body) => 
   ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


export default dialogReducer;