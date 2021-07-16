import React from "react";
import { UserType } from "../../../types/Types";
import Paginator from "../../common/Paginator/Paginator";
import { StyledWrapper } from "../../Styles";
import User from "./User";

type PropsType = {
   currentPage: number
   totalUsersCount: number
   pageSize: number
   onPageChanged: (pageNumber: number) => void
   users: Array<UserType>
   followingInProgress: Array<number>
   unfollow: (userId: number) => void
   follow: (userId: number) => void
}

let Users: React.FC<PropsType> = ({
   currentPage,
   totalUsersCount,
   pageSize,
   onPageChanged,
   users,
   followingInProgress,
   follow,
   unfollow
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
