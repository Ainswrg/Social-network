import React, { Component, createRef } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import {
   ChatButton,
   StyledChatContainer,
   ChattingUser,
   ChatBody,
   ChatFooter,
   ChatHeader,
   StyledIconPaperPlane,
   StyledIconPlus,
   StyledIconSetting,
   SettingButton,
} from "../../../../Styles";
import ChatForm from "./ChatForm";




const ChatContent = (props) => {

   const handleSubmit = (values, { setSubmitting }) => {
      debugger
      props.sendMessage(values.newMessageBody);
      values.newMessageBody = "";
      setSubmitting(false);
   }
   const messagesEndRef = createRef(null);

   const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
   };


   return (
      <StyledChatContainer>
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
      {/* <ChatFooter> */}
         <ChatForm handleSubmit={handleSubmit}/>
          {/* <div className="sendNewMessage"> 
            <ChatButton >
               <StyledIconPlus/>
            </ChatButton>
            <input
               type="text"
               placeholder="Type a message here"
               onChange={this.onStateChange}
               value={this.state.msg}
            />
            <ChatButton onClick={this.onSendMessageClick} id="sendMsgBtn">
               <StyledIconPaperPlane/>
            </ChatButton>
         </div>  */}
      {/* </ChatFooter> */}
   </StyledChatContainer>
);
}

export default ChatContent;
// export default class ChatContent extends Component {
//    messagesEndRef = createRef(null);

//    constructor(props) {
//       super(props);
//       this.state = {
//          chat: props.dialogPage.messages,
//          msg: "",
//          sendMessage: props.sendMessage,
//       };
//    }

//    scrollToBottom = () => {
//       this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//    };

//    // componentDidMount() {
//    //    window.addEventListener("keydown", (e) => {
//    //       if (e.keyCode === 13) {
//    //          if (this.state.msg !== "") {
//    //             this.props.dialogPage.messages.push({
//    //                key: 8,
//    //                type: "",
//    //                msg: this.state.msg,
//    //                image: null,
//    //             });
//    //             this.setState({ chat: [...this.props.dialogPage.messages] });
//    //             this.scrollToBottom();
//    //             this.setState({ msg: "" });
//    //          }
//    //       }
//    //    });
//    //    this.scrollToBottom();
//    // }

//    // onSendMessageClick = () => {
//    //    if (this.state.msg !== "") {
//    //       this.props.dialogPage.messages.push({
//    //          key: 9,
//    //          type: "",
//    //          msg: this.state.msg,
//    //          image: null,
//    //       });
//    //       this.setState({ chat: [...this.props.dialogPage.messages] });
//    //       this.scrollToBottom();
//    //       this.setState({ msg: "" });
//    //    }
//    //    this.scrollToBottom();
//    // };

//    // onStateChange = (e) => {
//    //    this.setState({ msg: e.target.value });
//    // };

//    handleSubmit = (values, { setSubmitting }) => {
//       debugger
//       this.props.sendMessage(values.newMessageBody);
//       values.newMessageBody = "";
//       setSubmitting(false);
//    }
//    render() {
//       return (
//          <StyledChatContainer>
//             <ChatHeader>
//                <ChattingUser>
//                   <Avatar
//                      isOnline="active"
//                      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
//                   />
//                   <p>Tim Hover</p>
//                </ChattingUser>
//                <SettingButton>
//                   <StyledIconSetting/>
//                </SettingButton>
//             </ChatHeader>
//             <ChatBody vh={true}>
//                <>
//                   {this.state.chat.map((itm, index) => {
//                      return (
//                         <ChatItem
//                            animationDelay={index + 2}
//                            key={itm.key}
//                            user={itm.type ? itm.type : "me"}
//                            msg={itm.msg}
//                            image={itm.image}
//                         />
//                      );
//                   })}
//                   <div ref={this.messagesEndRef} />
//                </>
//             </ChatBody>
//             {/* <ChatFooter> */}
//                <ChatForm handleSubmit={this.handleSubmit}/>
//                 {/* <div className="sendNewMessage"> 
//                   <ChatButton >
//                      <StyledIconPlus/>
//                   </ChatButton>
//                   <input
//                      type="text"
//                      placeholder="Type a message here"
//                      onChange={this.onStateChange}
//                      value={this.state.msg}
//                   />
//                   <ChatButton onClick={this.onSendMessageClick} id="sendMsgBtn">
//                      <StyledIconPaperPlane/>
//                   </ChatButton>
//                </div>  */}
//             {/* </ChatFooter> */}
//          </StyledChatContainer>
//       );
//    }
// }
