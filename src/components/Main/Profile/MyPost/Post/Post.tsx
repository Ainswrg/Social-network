import { useSelector } from "react-redux";
import avatar from "../../../../../assets/img/avatar.png";
import { AppStateType } from "../../../../../Redux/redux-store";
import {
   StyledContainer,
   AvatarPost,
   MessagePost,
   LikePost,
   colors,
} from "../../Styles";

interface PropsType {
   message: string
   likesCount: number
}

const Post:React.FC<PropsType> = ({message, likesCount}) => {
   const profile = useSelector((state: AppStateType) => state.profilePage.profile);
   return (
      <StyledContainer
         primary margin="1.25rem 0"
         display="flex" direction="column"
         rounded="0.25rem" justify="justify-around"
         items="center" shadow={`0 0 0.3125rem ${colors.blue3}`}
      >
         <AvatarPost>
            <img src={profile?.photos?.large || avatar} alt="logo" />
         </AvatarPost>

         <MessagePost>{message}</MessagePost>

         <LikePost>
            <span>Like {likesCount}</span>
         </LikePost>
      </StyledContainer>
   );
};

export default Post;
