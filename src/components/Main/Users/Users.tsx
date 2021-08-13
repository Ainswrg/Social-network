import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FilterType, requestUsers } from '../../../Redux/users-reducer';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter,
} from '../../../Redux/users-selectors';
import Paginator from '../../common/Paginator/Paginator';
import { StyledWrapper } from '../../Styles';
import User from './User';
import UsersSearchForm from './UsersSearchForm';

type PropsType = {
  // unfollow: (userId: number) => void;
  // follow: (userId: number) => void;
};


export const Users: React.FC<PropsType> = () => {

  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const users = useSelector(getUsers)
  const followingInProgress = useSelector(getFollowingInProgress)
  const filter = useSelector(getUsersFilter)
  const follow = (userId: number) => {
    dispatch(follow(userId))
  }
  const unfollow = (userId: number) => {
    dispatch(unfollow(userId))
  }

  React.useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize, filter));
  }, [])

  const dispatch = useDispatch()

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  }

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  }


  return (
    <StyledWrapper>

      <UsersSearchForm onFilterChanged={onFilterChanged}/>

      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />

      {users.map((u) => (
        <User
          user={u}
          key={u.id}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </StyledWrapper>
  );
};