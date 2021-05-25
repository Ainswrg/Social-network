import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import {
   StyledIcon,
   StyledButtonSetting,
   StyledChatContent,
   StyledChatItem,
   StyledContentBody,
} from "../../../../Styles";
import { FiSettings } from "react-icons/fi";

export default class ChatContent extends Component {
   messagesEndRef = createRef(null);

   constructor(props) {
      super(props);
      this.state = {
         chat: props.dialogPage.messages,
         msg: "",
      };
   }

   scrollToBottom = () => {
      this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
   };

   componentDidMount() {
      window.addEventListener("keydown", (e) => {
         if (e.keyCode == 13) {
            if (this.state.msg != "") {
               this.props.dialogPage.messages.push({
                  key: 8,
                  type: "",
                  msg: this.state.msg,
                  image: null,
               });
               this.setState({ chat: [...this.props.dialogPage.messages] });
               this.scrollToBottom();
               this.setState({ msg: "" });
            }
         }
      });
      this.scrollToBottom();
   }

   onSendMessageClick = () => {
      if (this.state.msg !== "") {
         this.props.dialogPage.messages.push({
            key: 9,
            type: "",
            msg: this.state.msg,
            image: null,
         });
         this.setState({ chat: [...this.props.dialogPage.messages] });
         this.scrollToBottom();
         this.setState({ msg: "" });
      }
      this.scrollToBottom();
   };

   onStateChange = (e) => {
      this.setState({ msg: e.target.value });
   };
   
   render() {
      return (
             <StyledChatContent> 
               <div className="chatHeader">
                     <div className="chatCurrentChattingUser">
                        <Avatar
                              isOnline="active"
                              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                           />
                        <p>Tim Hover</p>
                     </div>
                  <button >
                     <StyledIcon></StyledIcon>
                  </button>
                  {/* <div className="blocks">
                     <div className="settings">
                        <button className="btn-nobg">
                           <i className="fa fa-cog"></i>
                        </button>
                     </div>
                  </div> */}
               {/* </StyledChatHeader> */}
               </div>
               <StyledContentBody vh={true}>
               {/* <div className="content__body"> */}
               {/* <div className="chat__items"> */}
                  <div className="chatItem">
                     {this.state.chat.map((itm, index) => {
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
                     <div ref={this.messagesEndRef} />
                  </div>

                  {/* </div> */}
                  {/* </div> */}
               </StyledContentBody>
               
               <div className="content__footer">
                  <div className="sendNewMessage">
                     <button className="addFiles">
                        <i className="fa fa-plus"></i>
                     </button>
                     <input
                        type="text"
                        placeholder="Type a message here"
                        onChange={this.onStateChange}
                        value={this.state.msg}
                     />
                     <button
                        onClick={this.onSendMessageClick}
                        className="btnSendMsg"
                        id="sendMsgBtn"
                     >
                        <i className="fa fa-paper-plane"></i>
                     </button>
                  </div>
               </div>
          </StyledChatContent>
         
      );
   }
}
