import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../../assets/img/avatar.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return (
      <div>
         <div className={styles.container}>
            {pages.map((p) => {
               return (
                  <div
                     key={p}
                     style={{ cursor: "pointer" }}
                     className={props.currentPage === p ? styles.selectedPage : undefined }
                     onClick={(e) => {
                        props.onPageChanged(p);
                     }}
                  >
                     {p}
                  </div>
               );
            })}
         </div>
         {props.users.map((u) => (
            <div key={u.id}>
               <div>
                  <div>
                     <NavLink to={'/profile/' + u.id}>
                        <img
                           src={
                              u.photos.small != null
                                 ? u.photos.small
                                 : userPhoto
                           } alt="img"
                           className={styles.userPhoto}
                        />
                     </NavLink>
                  </div>
                  <div>
                     {u.followed 
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                           props.unfollow(u.id)
                        }}> Unfollow </button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                           props.follow(u.id)
                        }}> Follow </button> }

                  </div>
               </div>
               <div>
                  <div>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                  </div>
                  <div>
                     <div>{"u.location.country"}</div>
                     <div>{"u.location.city"}</div>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default Users;
