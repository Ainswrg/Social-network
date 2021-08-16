import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as queryString from "querystring";

import { FilterType, follow, requestUsers, unfollow } from "../../../Redux/users-reducer";
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter,
} from "../../../Redux/users-selectors";
import Paginator from "../../common/Paginator/Paginator";
import { StyledWrapper } from "../../Styles";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";

type PropsType = {};

type QueryParamsType = {
  term?: string;
  page?: string;
  friend?: string;
}

export const Users: React.FC<PropsType> = () => {
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);
  const filter = useSelector(getUsersFilter);

  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType;

    let actualPage = currentPage;
    let actualFilter = filter;

    if (!!parsed.page) actualPage = Number(parsed.page);

    if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string };
    // if (!!parsed.friend)
    //   actualFilter = {
    //     ...actualFilter,
    //     friend:
    //       parsed.friend === "null"
    //         ? null
    //         : parsed.friend === "true"
    //         ? true
    //         : false,
    //   };
    switch (parsed.friend) {
      case "null":
        actualFilter = { ...actualFilter, friend: null };
        break;
      case "true":
        actualFilter = { ...actualFilter, friend: true };
        break;
      case "false":
        actualFilter = { ...actualFilter, friend: false };
        break;
    }

    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, []);

  React.useEffect(() => {
    const query: QueryParamsType = {}

    if(!!filter.term) query.term = filter.term
    if(!!filter.friend !== null ) query.friend = String(filter.friend)
    if(currentPage !== 1) query.page = String(currentPage)
    
    history.push({
      pathname: "/users",
      search: queryString.stringify(query),
    });
  }, [filter, currentPage]);

  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType) => {
    dispatch(requestUsers(1, pageSize, filter));
  };

  const followUser = (userId: number) => {
    dispatch(follow(userId));
  };
  const unfollowUser = (userId: number) => {
    dispatch(unfollow(userId));
  };

  return (
    <StyledWrapper>
      <UsersSearchForm onFilterChanged={onFilterChanged} />

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
          follow={followUser}
          unfollow={unfollowUser}
        />
      ))}
    </StyledWrapper>
  );
};
