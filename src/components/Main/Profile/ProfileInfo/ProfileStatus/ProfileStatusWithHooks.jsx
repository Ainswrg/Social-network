import React, { useState } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = ({updateStatus,...props}) => {
debugger
   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

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
      <div className={s.status_wrapper}>
         { !editMode &&
            <div>
               <span onDoubleClick={activateEditMode}>
                  {props.status || "-------"}{" "}
               </span>
            </div>
         }
         { editMode && 
            <div>
               <input
                  onChange={onStatusChange}
                  autoFocus={true}
                  onBlur={deactivateEditMode}
                  value={status}
               />
            </div>
         }
      </div>
   );
};

export default ProfileStatusWithHooks;
