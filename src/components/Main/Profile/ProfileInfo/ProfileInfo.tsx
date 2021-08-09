import React from 'react'
import Preloader from "../../../common/Preloader/Preloader";
import Photo from "./Photo";
import { ProfileContent, ProfileDescription, StyledButton, StyledContainer, colors, StyledProfileData, StyledContacts, Jumbotron} from "../Styles";
// import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
import { ProfileType } from "../../../../types/Types";
import { FormikHelpers } from 'formik';
import { ContactsType } from '../../../../types/Types';


// const initialValues = {
//    fullName: "",
//    lookingForAJob: "",
//    lookingForAJobDescription: "",
//    aboutMe: "",
//    contacts: "",
// };

type PropsType = {
   profile: ProfileType | null
   status: string
   updateStatus: (status: string) => void
   isOwner: boolean
   savePhoto: (file: File) => void
   saveProfile: (profile: ProfileType) => Promise<any>
}
// type InitialValuesType = typeof initialValues

const ProfileInfo:React.FC<PropsType> = ({
   profile,
   status,
   updateStatus,
   isOwner,
   savePhoto,
   saveProfile,
}) => {
   let [editMode, setEditMode] = React.useState<boolean>(false);

   if (!profile) {
      return <Preloader/>;
   }

   const handleSubmit = (values: ProfileType, actions: FormikHelpers<{}>) => {
      actions.setStatus(undefined);
      saveProfile && saveProfile(values).then(() => {
         setEditMode(false);
      });
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
                     // initialValues={initialValues}
                     // setEditMode={setEditMode}
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

type ProfileDataPropsType = {
   profile: ProfileType
   isOwner: boolean
   goToEditMode: () => void
}

export const ProfileData:React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
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
            <b>Contacts</b>:{
            Object
               .keys(profile.contacts)
               .map((key) => {
               return (
                  <Contact
                     key={key}
                     contactTitle={key}
                     contactValue={profile.contacts[key as keyof ContactsType]}
                  />
               );
            })}
         </div>
      </StyledProfileData>
   );
};

const Contact = ({ contactTitle, contactValue }: any) => {
   return (
      <StyledContacts>
         <b>{contactTitle}</b>: <span>{contactValue}</span>
      </StyledContacts>
   );
};

export default ProfileInfo;
