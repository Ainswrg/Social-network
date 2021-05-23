const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
   dialogs: [
      { id: 1, name: "Tima" },
      { id: 2, name: "Anya" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Yura" },
      { id: 5, name: "Andrey" },
      { id: 6, name: "Nastya" },
   ],
   newMessageBody: "",
   // incomingMessages: [{ id: 1, message: "Hello", time: "5:35" }],
   // outgoingMessages: [
   //    { id: 2, message: "Hi", time: "5:35" },
   //    { id: 3, message: "How a u?", time: "5:36" },
   // ],
   messages: [
      {
         key:1, 
         image: null,
         type: "",
         msg: "Hi Tim, How are you?",
      },
      {
         key: 2,
         image: null,
         type: "other",
         msg: "I am fine.",
       },
       {
         key: 3,
         image: null,
         type: "other",
         msg: "What about you?",
       },
       {
         key: 4,
         image: null,
         type: "",
         msg: "Awesome these days.",
       },
       {
         key: 5,
         image: null,
         type: "other",
         msg: "Finally. What's the plan?",
       },
       {
         key: 6,
         image: null,
         type: "",
         msg: "what plan mate?",
       },
       {
         key: 7,
         image: null,
         type: "other",
         msg: "I'm taliking about the tutorial",
       },
   ]
};

const dialogReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE: {
         let body = state.newMessageBody;
         return {
            ...state,
            // newMessageBody: "",
            // outgoingMessages: [
               messages: [
               ...state.messages,
               { key: 8, msg: body, type: "" },
            ],
         };
      }
      case UPDATE_NEW_MESSAGE_BODY: {
         return {
            ...state,
            newMessageBody: action.body,
         };
      }
      default:
         return state;
   }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   body: body,
});

export default dialogReducer;
