import Dialogs from "./Dialogs";
import {
   sendMessage,
   updateNewMessageBody,
} from "../../../Redux/dialog-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage,
   };
};

const DialogsContainer = connect(mapStateToProps, {
   updateNewMessageBody,
   sendMessage,
})(Dialogs);

export default DialogsContainer;
