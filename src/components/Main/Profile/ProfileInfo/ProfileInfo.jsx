import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import Photo from "./Photo";
import { ProfileContent, ProfileDescription } from "../../../Styles";
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
      return <Preloader />;
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
         <div className={s.jumbotron}></div>
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
      <div>
         {isOwner && (
            <div>
               <button onClick={goToEditMode}>edit</button>
            </div>
         )}
         <h1>{profile.fullName}</h1>
         <br/>
         <hr/>
         <br/>
         <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
         {profile.lookingForAJob && (
            <div>
               <b>My professional skills</b>:{" "}
               {profile.lookingForAJobDescription}
            </div>
         )}
         <div>
            <p>About me: {profile.aboutMe}</p>
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
      </div>
   );
};

const Contact = ({ contactTitle, contactValue }) => {
   return (
      <div className={s.contact}>
         <b>{contactTitle}</b>: {contactValue}
      </div>
   );
};

export default ProfileInfo;
