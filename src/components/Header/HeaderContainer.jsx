import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {
   setAuthUserData,
   setUserProfile,
} from "../../Redux/auth-reducer";
import { authAPI, profileAPI } from "../../api/api";

class HeaderContainer extends React.Component {
   componentDidMount() {
      authAPI.getAuthMe()
         .then((response) => {
            if (response.data.resultCode === 0) {
               let { id, email, login } = response.data.data;

               this.props.setAuthUserData(id, email, login);
            }
         });

         profileAPI.getProfile()
         .then((response) => {
            this.props.setUserProfile(response.data);
         });
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

export default connect(mapStateToProps, {
   setAuthUserData,
   setUserProfile,
})(HeaderContainer);
