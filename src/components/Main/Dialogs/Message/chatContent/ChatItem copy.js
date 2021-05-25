import React, { Component } from "react";
import { StyledChatItem, StyledChatItemOther } from "../../../../Styles";
import Avatar from "../chatList/Avatar";

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <StyledChatItem style={{ animationDelay: `0.8s` }} >
      <div>
         {this.props.user == "me" &&
         <StyledChatItem delay={0.8}>
         <div className="chat__item__content">
            <div className="chat__msg">{this.props.msg}</div>
            <div className="chat__meta">
               <span>16 mins ago</span>
               <span>Seen 1.03PM</span>
            </div>
         </div>

         <Avatar isOnline="active" image={this.props.image} />
      </StyledChatItem>  
      || this.props.user == "other" && 
         <StyledChatItemOther delay={0.8}>
            <div className="chat__item__content">
               <div className="chat__msg">{this.props.msg}</div>
               <div className="chat__meta">
                  <span>16 mins ago</span>
                  <span>Seen 1.03PM</span>
               </div>
            </div>

            <Avatar isOnline="active" image={this.props.image} />
         </StyledChatItemOther>}
      
      </div>
      //   <div 
      //   style={{ animationDelay: `0.8s` }}
        
      //    className={`chat__item ${this.props.user ? this.props.user : ""}`}
      //  >
       
      // </div>
      /* </StyledChatItem> */
      
    );
  }
}
