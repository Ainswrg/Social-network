import React from "react";
import Dialogs from "./Dialogs";
import { dialogActions } from "../../../Redux/dialog-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { AppStateType } from "../../../Redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogPage: state.dialogPage,
  };
};

export default compose<React.ComponentType>(
   withAuthRedirect,
   connect(mapStateToProps, {...dialogActions}),
)(Dialogs);
