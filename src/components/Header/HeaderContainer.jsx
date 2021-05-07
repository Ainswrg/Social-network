import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, getAuthUserData, setProfileData } from "../../Redux/auth-reducer";
import { compose } from "redux";

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getAuthUserData();
      this.props.setProfileData();
   }

   render() {
      return <Header {...this.props} profile={this.props.profile} />;
   }
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
   profile: state.profilePage.profile,
});

export default compose(
   connect(mapStateToProps, {
      setAuthUserData, getAuthUserData, setProfileData,
   }),
)(HeaderContainer)

// export default connect(mapStateToProps, {
//    setAuthUserData, getAuthUserData, setProfileData,
// })(HeaderContainer);
