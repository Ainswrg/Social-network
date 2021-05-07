import Dialogs from "./Dialogs";
import {
   sendMessage,
   updateNewMessageBody,
} from "../../../Redux/dialog-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "react-router";

let AuthRedirectComponent = withAuthRedirect(Dialogs);

let mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage,
   };
};

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

const DialogsContainer = connect(mapStateToProps, {
   updateNewMessageBody,
   sendMessage,
})(WithUrlDataContainerComponent);

export default DialogsContainer;
