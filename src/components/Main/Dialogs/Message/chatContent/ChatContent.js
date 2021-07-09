import React, { createRef } from "react";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import {
   StyledContainer,
   ChattingUser,
   ChatBody,
   ChatFooter,
   ChatHeader,
   StyledIconSetting,
   SettingButton,
   colors,
} from "../../../../Styles";
import ChatForm from "./ChatForm";


const ChatContent = (props) => {
   const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
   };

   const handleSubmit = (values, {setSubmitting}) => {
      props.sendMessage(values.newMessageBody);
      values.newMessageBody = "";
      setSubmitting(false);
   }
   const messagesEndRef = createRef(null);

   return (
      <StyledContainer grow="1" padding="1.25rem 2.5rem" minW="13.4rem" maxW="100%" bg={colors && colors.light2}>
      <ChatHeader>
         <ChattingUser>
            <Avatar
               isOnline="active"
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p>Tim Hover</p>
         </ChattingUser>
         <SettingButton>
            <StyledIconSetting/>
         </SettingButton>
      </ChatHeader>
      <ChatBody vh={true}>
         <>
            {props.dialogPage.messages.map((itm, index) => {
               return (
                  <ChatItem
                     animationDelay={index + 2}
                     key={itm.key}
                     user={itm.type ? itm.type : "me"}
                     msg={itm.msg}
                     image={itm.image}
                  />
               );
            })}
            <div ref={messagesEndRef} />
         </>
      </ChatBody>
      <ChatFooter>
         <ChatForm addNewMessage={handleSubmit}
         scrollToBottom={scrollToBottom}/>
      </ChatFooter>
   </StyledContainer>
);
}

export default ChatContent;