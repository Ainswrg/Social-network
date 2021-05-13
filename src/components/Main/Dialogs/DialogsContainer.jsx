import Dialogs from "./Dialogs";
import {
   sendMessage,
   updateNewMessageBody,
} from "../../../Redux/dialog-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
// import { withRouter } from "react-router";

let mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage,
   };
};

export default compose(
   connect(mapStateToProps, {updateNewMessageBody,sendMessage,}), withAuthRedirect)(Dialogs);
