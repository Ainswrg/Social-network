import { StyledWrapper } from "../../Styles";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <StyledWrapper>
         <ProfileInfo
            isOwner={props.isOwner}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto}
         />
         <MyPostContainer />
      </StyledWrapper>
   );
};

export default Profile;
