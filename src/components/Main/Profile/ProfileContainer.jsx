import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUserProfile } from "../../../Redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) userId = 15420;
      this.props.getUserProfile(userId);
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile} />;
   }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { getUserProfile })(
   WithUrlDataContainerComponent
);
