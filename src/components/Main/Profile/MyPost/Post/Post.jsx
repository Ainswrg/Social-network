import { useSelector } from "react-redux";
import avatar from "../../../../../assets/img/avatar.png";
import {
   StyledContainer,
   AvatarPost,
   MessagePost,
   LikePost,
   colors,
} from "../../../../Styles";

const Post = (props) => {
   const profile = useSelector((state) => state.profilePage.profile);
   return (
      <StyledContainer
         primary margin="1.25rem 0"
         display="flex" direction="column"
         rounded="0.25rem" justify="justify-around"
         items="center" shadow={`0 0 0.3125rem ${colors.blue3}`}
      >
         <AvatarPost>
            <img src={profile ? profile.photos.large : avatar} alt="logo" />
         </AvatarPost>

         <MessagePost>{props.message}</MessagePost>

         <LikePost>
            <span>Like {props.likesCount}</span>
         </LikePost>
      </StyledContainer>
   );
};

export default Post;
