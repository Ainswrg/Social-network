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
   ...props
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
               followingInProgress={props.followingInProgress}
               follow={props.follow}
               unfollow={props.unfollow}
            />
         ))}
      </StyledWrapper>
   );
};

export default Users;
