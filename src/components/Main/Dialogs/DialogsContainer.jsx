import Dialogs from "./Dialogs";
import {
   sendMessageCreator,
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

const mapDispatchToProps = (dispatch) => {
   return {
      sendMessage: (newMessageBody) => {
         dispatch(sendMessageCreator(newMessageBody))
      }
   }
}

export default compose(
   withAuthRedirect,
   connect(mapStateToProps, mapDispatchToProps),
   
)(Dialogs);
