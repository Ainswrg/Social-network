import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import { StyledWrapper } from "../../Styles";
import User from "./User";

let Users = ({
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
