import React from "react";
import { FilterType } from "../../../Redux/users-reducer";
import { UserType } from "../../../types/Types";
import Paginator from "../../common/Paginator/Paginator";
import { StyledWrapper } from "../../Styles";
import User from "./User";
import UsersSearchForm from "./UsersSearchForm";

type MapPropsType = {
  currentPage: number;
  totalUsersCount: number;
  pageSize: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
};
type DispatchPropsType = {
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
  onFilterChanged: (filter: FilterType) => void
};
type OwnProps = {
  onPageChanged: (pageNumber: number) => void;
};

let Users: React.FC<MapPropsType & DispatchPropsType & OwnProps> = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  onFilterChanged,
  users,
  followingInProgress,
  follow,
  unfollow,
}) => {
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


export default Users;
