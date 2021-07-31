import React from 'react';
import Avatar from '../Message1/chatList/Avatar';
import { ChatContainer, ChatContent, ChatMessage, ChatMeta, ChatSpan, StyledContentItems } from '../Styles';

type PropsType = {
   animationDelay: number
   user: string
   msg: string
   image: any
}
const Message: React.FC<PropsType> = ({user, msg, image}) => {
   return (
      <StyledContentItems>
         <ChatContainer user={user}>
            <ChatContent user={user}>
               <ChatMessage>{msg}</ChatMessage>
               <ChatMeta >
                  <ChatSpan user={user}>16 mins ago</ChatSpan>
                  <ChatSpan user={user}>Seen 1.03PM</ChatSpan>
               </ChatMeta>
            </ChatContent>
            <Avatar isOnline="active" image={image} />
         </ChatContainer>
      </StyledContentItems>
   );
}

export default Message;
