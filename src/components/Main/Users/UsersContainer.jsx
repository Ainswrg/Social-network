import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFeatchingAC } from '../../../Redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import preloader from '../../../assets/img/preloader.svg';
import Preloader from '../../common/Preloader/Preloader';

class UsersContainers extends React.Component {

   componentDidMount() {
      this.props.toggleIsFeatching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.toggleIsFeatching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFeatching(true);
      this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then((response) => {
            this.props.toggleIsFeatching(false);
            this.props.setUsers(response.data.items);
         });
   }

   render() {

      return <>
      { this.props.isFetching ? <Preloader /> : null }
         <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageAC(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setUsersTotalCountAC(totalCount))
      },
      toggleIsFeatching: (isFeatching) => {
         dispatch(toggleIsFeatchingAC(isFeatching))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainers);