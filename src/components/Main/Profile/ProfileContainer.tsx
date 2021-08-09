import React, { ComponentType } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
   getUserProfile,
   getStatus,
   updateStatus,
   savePhoto,
   saveProfile
} from "../../../Redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import { AppStateType } from "../../../Redux/redux-store";
import { ProfileType } from "../../../types/Types";

type MapPropsType = ReturnType<typeof mapStateToProps>

type DispatchPropsType = {
   getUserProfile: (userId: number) => void
   getStatus: (userId: number) => void
   updateStatus: (status: string) => void
   savePhoto: (file: File) => void
   saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
   userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>


class ProfileContainer extends React.Component<PropsType> {
   constructor(props: PropsType) {
      super(props);
   }

   refreshProfile() {
      let userId: number | null = +this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
         if (!userId) {
            this.props.history.push("/login");
         }
      }

      if(userId) {
         this.props.getUserProfile(userId);
         this.props.getStatus(userId);
      }
   }

   componentDidMount() {
      this.refreshProfile();
   }


   componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
      if(this.props.match.params.userId != prevProps.match.params.userId) {
         this.refreshProfile();
      }
   }
   componentWillUnmount(): void {
   }

   render() {
      return (
         <Profile
            {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
         />
      );
   }
}

let mapStateToProps = (state: AppStateType)=> ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   authorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth,
});

export default compose<ComponentType>(
   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
   withRouter,
)(ProfileContainer);
