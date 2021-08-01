import React from "react";

import {
  ChatContainer,
  ChatContent,
  ChatMessage,
  ChatMeta,
  ChatSpan,
} from "../Styles";

type PropsType = {
  animationDelay: number;
  user: string;
  msg: string;
  image: any;
};
const Message: React.FC<PropsType> = ({ user, msg }) => {
  return (
    <ChatContainer user={user}>
      <ChatContent user={user}>
        <ChatMessage>{msg}</ChatMessage>
        <ChatMeta>
          <ChatSpan user={user}>16 mins ago</ChatSpan>
          <ChatSpan user={user}>Seen 1.03PM</ChatSpan>
        </ChatMeta>
      </ChatContent>
      
    </ChatContainer>
  );
};

export default Message;
