import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../Redux/dialog-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body))
      },
      sendMessage: () => {
         dispatch(sendMessageCreator());
         
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;