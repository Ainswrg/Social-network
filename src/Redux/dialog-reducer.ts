const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = { 
   id: number
   name: string
}

type MessageType = {
   key: number
   image?: string | null
   type: string
   msg: string
}

let initialState = {
   dialogs: [
      { id: 1, name: "Tima" },
      { id: 2, name: "Anya" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Yura" },
      { id: 5, name: "Andrey" },
      { id: 6, name: "Nastya" },
   ] as Array<DialogType>,

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
   ] as Array<MessageType>
};

export type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SEND_MESSAGE: {
         let body = action.newMessageBody;
         return {
            ...state,
               messages: [
               ...state.messages,
               { key: 8, msg: body, type: "" },
            ],
         };
      }
      default:
         return state;
   }
};

type sendMessageCreatorActionType = {
   type: typeof SEND_MESSAGE
   newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogReducer;
