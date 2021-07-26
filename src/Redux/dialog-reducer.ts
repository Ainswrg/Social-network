import { InferActionsTypes } from "./redux-store";

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  key: number;
  image?: string | null;
  type: string;
  msg: string;
};

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
      key: 1,
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
  ] as Array<MessageType>,
};

const dialogReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/DIALOGS/SEND_MESSAGE": {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { key: 8, msg: body, type: "" }],
      };
    }
    default:
      return state;
  }
};

export const dialogActions = {
  sendMessage: (
    newMessageBody: string
  ) => ({ type: "SN/DIALOGS/SEND_MESSAGE", newMessageBody } as const),
};

export default dialogReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof dialogActions>;