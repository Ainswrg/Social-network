import React from "react";
import { UserType } from "../../../types/Types";
import Paginator from "../../common/Paginator/Paginator";
import { StyledWrapper } from "../../Styles";
import User from "./User";

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
};
type OwnProps = {
  onPageChanged: (pageNumber: number) => void;
};

let Users: React.FC<MapPropsType & DispatchPropsType & OwnProps> = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <StyledWrapper>
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
