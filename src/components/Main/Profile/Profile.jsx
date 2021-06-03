import { StyledWrapper } from "../../Styles";
import MyPostContainer from "./MyPost/MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
   return (
      <StyledWrapper>
         <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
         />
         <MyPostContainer />
      </StyledWrapper>
   );
};

export default Profile;
