import React, { useEffect, useState } from "react";
import { ProfileStatus } from "../../../../Styles";

const ProfileStatusWithHooks = ({updateStatus,...props}) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(() => {
      setStatus(props.status);
   }, [props.status]);

   const activateEditMode = () => {
      setEditMode(true)
   }

   const deactivateEditMode = () => {
      setEditMode(false);
      updateStatus(status);
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <ProfileStatus>
         { !editMode &&
            <>
               <span onDoubleClick={activateEditMode}>
                  {props.status || "-------"}{" "}
               </span>
            </>
         }
         { editMode && 
            <>
               <input
                  onChange={onStatusChange}
                  autoFocus={true}
                  onBlur={deactivateEditMode}
                  value={status}
               />
            </>
         }
      </ProfileStatus>
   );
};

export default ProfileStatusWithHooks;
