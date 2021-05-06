import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, getAuthUserData } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getAuthUserData();
   }

   render() {
      return <Header {...this.props} profile={this.props.profile} />;
   }
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
});

export default connect(mapStateToProps, {
   setAuthUserData, getAuthUserData
})(HeaderContainer);
