import React, { ChangeEvent, useEffect, useState } from "react";
import { FC } from "react";
import { StyledProfileStatus } from "../../Styles";


type PropsType = {
   status: string
   updateStatus: (newStatus: string) => void
}

const ProfileStatusWithHooks: FC<PropsType> = ({updateStatus,...props}) => {

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

   const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <StyledProfileStatus>
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
      </StyledProfileStatus>
   );
};

export default ProfileStatusWithHooks;
