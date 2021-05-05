import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../../assets/img/avatar.png";
import { NavLink } from "react-router-dom";
import * as axios from 'axios';

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
                     className={props.currentPage === p ? styles.selectedPage : undefined}
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
                        ? <button onClick={() => { 

                           axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                              withCredentials: true,
                              headers: {
                                 'API-KEY' : 'a9669977-6dbc-415c-a653-70657f4abf17',
                              }
                           })
                              .then((response) => {
                                 if (response.data.resultCode === 0) {
                                    props.unfollow(u.id);
                                 }
                              });


                        }}> Unfollow </button>
                        : <button  onClick={() => { 

                           axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                              withCredentials: true,
                              headers: {
                                 'API-KEY' : 'a9669977-6dbc-415c-a653-70657f4abf17',
                              }
                           })
                              .then((response) => {
                                 if(response.data.resultCode === 0) {
                                    props.follow(u.id);
                                    
                                 }
                                 
                              });

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
