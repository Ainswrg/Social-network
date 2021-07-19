import userPhoto from "../../../assets/img/avatar.png";
import { NavLink } from "react-router-dom";
import {
   Description,
   Username,
   StyledContainer,
   Status,
   UserLocation,
   Subscription,
   Button,
   colors,
   Avatar,
} from "../../Styles";
import Loader from "react-loader-spinner";

let User = ({ follow, unfollow, followingInProgress, user }) => {
   return (
      <StyledContainer primary margin={"1.25rem"} display={"flex"} direction={"column"} rounded={"0.25rem"} justify={"justify-around"} items={"center"} shadow={`0 0 5px ${colors.blue3}`}>
         <Subscription>
            <NavLink to={"/profile/" + user.id}>
               <Avatar
                  src={
                     user.photos.small != null ? user.photos.small : userPhoto
                  }
                  alt="img"
               />
            </NavLink>

            {followingInProgress.some((id) => id === user.id) ? (
               <Loader
                  type="ThreeDots"
                  color={colors.blue4}
                  height={42}
                  width={80}
               />
            ) : user.followed ? (
               <Button
                  onClick={() => {
                     unfollow(user.id);
                  }}
               >
                  Unfollow
               </Button>
            ) : (
               <Button
                  onClick={() => {
                     follow(user.id);
                  }}
               >
                  Follow
               </Button>
            )}
         </Subscription>
         <Description>
            <Username>
               <NavLink to={"/profile/" + user.id}>{user.name}</NavLink>
               <Status>{user.status}</Status>
            </Username>
            <UserLocation>
               <div>{"user.location.country"}</div>
               <div>{"user.location.city"}</div>
            </UserLocation>
         </Description>
      </StyledContainer>
   );
};

export default User;
