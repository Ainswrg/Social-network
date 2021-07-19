import Preloader from "../../../common/Preloader/Preloader";
import Photo from "./Photo";
import { ProfileContent, ProfileDescription, StyledButton, StyledContainer, colors, StyledProfileData, StyledContacts, Jumbotron} from "../Styles";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
   profile,
   status,
   updateStatus,
   isOwner,
   savePhoto,
   saveProfile,
}) => {
   let [editMode, setEditMode] = useState(false);

   if (!profile) {
      return <Preloader/>;
   }

   const handleSubmit = (values, actions) => {
      actions.setStatus(undefined);
      saveProfile(values, actions).then(() => {
         setEditMode(false);
      });
   };

   const initialValues = {
      fullName: "",
      lookingForAJob: "",
      lookingForAJobDescription: "",
      aboutMe: "",
      contacts: "",
   };

   return (
      <>
         <Jumbotron/>
         <ProfileContent>
            <Photo
               profile={profile}
               status={status}
               updateStatus={updateStatus}
               isOwner={isOwner}
               savePhoto={savePhoto}
            />

            <ProfileDescription>
               {editMode ? (
                  <ProfileDataForm
                     profile={profile}
                     handleSubmit={handleSubmit}
                     initialValues={initialValues}
                     setEditMode={setEditMode}
                  />
               ) : (
                  <ProfileData
                     goToEditMode={() => {
                        setEditMode(true);
                     }}
                     profile={profile}
                     isOwner={isOwner}
                  />
               )}
            </ProfileDescription>
         </ProfileContent>
      </>
   );
};

export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
   return (
      <StyledProfileData>
         {isOwner && (
            <StyledContainer margin="20px 0">
               <StyledButton bgColor={colors.blue4}
                  onClick={goToEditMode}>edit</StyledButton>
            </StyledContainer>
         )}
         <h1>{profile.fullName}</h1>
         <br/>
         <hr/>
         <br/>
         <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
         {profile.lookingForAJob && (
            <div>
               <b>My professional skills</b>:{" "}
               {profile.lookingForAJobDescription}
            </div>
         )}
         <div>
            <p><span>About me:</span> {profile.aboutMe}</p>
         </div>
         <br/>
         <div>
            <b>Contacts</b>:
            {Object.keys(profile.contacts).map((key) => {
               return (
                  <Contact
                     key={key}
                     contactTitle={key}
                     contactValue={profile.contacts[key]}
                  />
               );
            })}
         </div>
      </StyledProfileData>
   );
};

const Contact = ({ contactTitle, contactValue }) => {
   return (
      <StyledContacts>
         <b>{contactTitle}</b>: <span>{contactValue}</span>
      </StyledContacts>
   );
};

export default ProfileInfo;
