import React, { MutableRefObject } from 'react';
import DialogItem from "./DialogItem/DialogItem.jsx";
import { InitialStateType } from "../../../Redux/dialog-reducer";
import { ChatBody, ChatMessages, ChatUsers, ChatWrapper, } from "./Styles";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import Message from "./Message/Message";
import { FormikHelpers } from 'formik';

type OwnPropsType = {
  dialogPage: InitialStateType;
  sendMessage: (messageText: string) => void;
};




export interface initialType {
  newMessageBody: any;
}
const Dialogs: React.FC<OwnPropsType> = ({ dialogPage, sendMessage }) => {

  const messagesEndRef = React.useRef() as MutableRefObject<HTMLDivElement>;

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [dialogPage.messages]);

  let state = dialogPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));
  const initialValues: initialType = {
    newMessageBody: "",
    
  };

  const handleSubmit = (values: initialType, ) => {
    sendMessage(values.newMessageBody);
    values.newMessageBody = "";
  };
  // if(props.isAuth) return <Redirect to={'/login'}/>
  return (
    <>
      <ChatWrapper>
        <ChatUsers>
          {dialogsElements}
        </ChatUsers>
        <ChatMessages>
          <ChatBody vh={true}>
                {dialogPage.messages.map((itm, index) => {
                  return (
                    <Message
                      animationDelay={index + 2}
                      key={itm.key}
                      user={itm.type ? itm.type : "me"}
                      msg={itm.msg}
                      image={itm.image}
                    />
                  );
                })}
                <div ref={messagesEndRef} />
          </ChatBody>

          <AddMessageForm
            onSubmit={handleSubmit}
            initialValues={initialValues}
          />
        </ChatMessages>
      </ChatWrapper>
      {/* <ChatList /> */}
      {/* <ChatContent
                    sendMessage={props.sendMessage}
                    dialogPage={props.dialogPage}
                  /> */}
    </>
  );
};

export default Dialogs;
