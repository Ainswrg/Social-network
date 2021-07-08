import { useSelector } from 'react-redux';
import avatar from '../../../../../assets/img/avatar.png'
import { StyledContainer, AvatarPost, MessagePost, LikePost } from '../../../../Styles';

const Post = (props) => {
   const profile = useSelector(state => state.profilePage.profile)
   return (
      <StyledContainer>
         <AvatarPost >
            <img src={profile ? profile.photos.large : avatar} alt="logo" />
         </AvatarPost>
         
         <MessagePost>
            {props.message} 
         </MessagePost>
         
         <LikePost>
            <span>Like {props.likesCount}</span>
         </LikePost>
      </StyledContainer>
   )
}

export default Post;