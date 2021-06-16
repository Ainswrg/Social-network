import { Form, Formik } from "formik";
import React from "react";
import s from "./ProfileInfo.module.css";
import Loader from "react-loader-spinner";
import FormikField from "../../../shared/FormikField/FormikField";
import { colors } from "../../../Styles";

const ProfileDataForm = ({ profile, handleSubmit }) => {
   return (
      <Formik onSubmit={handleSubmit} initialValues={profile}>
         {({ status, isSubmitting }) => (
            <Form>
               {!isSubmitting && (
                  <button className="btn btn-green">Save</button>
               )}
               {isSubmitting && (
                  <Loader
                     type="ThreeDots"
                     color={colors.dark4}
                     height={49}
                     width={100}
                  />
               )}
               <div>
                  Full name:
                  <FormikField
                     type="text"
                     name="fullName"
                     placeholder="Full name"
                  />
               </div>

               <div>
                  Looking for a job:{" "}
                  <FormikField
                     type="checkbox"
                     name="lookingForAJob"
                     placeholder="Looking..."
                  />
               </div>

               <div>
                  <b>My professional skills</b>:
                  <FormikField
                     type="textarea"
                     name="lookingForAJobDescription"
                     placeholder="Description"
                  />
               </div>

               <div>
                  About me:
                  <FormikField
                     type="textarea"
                     name="aboutMe"
                     placeholder="Description"
                  />
               </div>

               <div>
                  <b>Contacts</b>:{" "}
                  {Object.keys(profile.contacts).map((key) => {
                     return (
                        <div key={key} className={s.contact}>
                           {key} :{" "}
                           <FormikField
                              statusProfile={status}
                              type="text"
                              name={"contacts." + key}
                              placeholder="url"
                           />
                        </div>
                     );
                  })}
               </div>
            </Form>
         )}
      </Formik>
   );
};

export default ProfileDataForm;
