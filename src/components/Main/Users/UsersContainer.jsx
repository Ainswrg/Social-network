import React from "react";
import { connect } from "react-redux";
import {
   follow,
   unfollow,
   setCurrentPage,
   toggleFollowingInProgress,
   getUsers,
} from "../../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainers extends React.Component {
   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
   }

   render() {
      return (
         <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               followingInProgress={this.props.followingInProgress}
            />
         </>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
   };
};


export default withAuthRedirect(connect(mapStateToProps, {
   follow,
   unfollow,
   setCurrentPage,
   toggleFollowingInProgress,
   getUsers,
})(UsersContainers));
