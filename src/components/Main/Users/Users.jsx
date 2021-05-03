import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../../assets/img/avatar.png';




let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

      let pages= [];
      for(let i = 1; i <= pagesCount; i++) {
         pages.push(i);
      }

   return <div>
      <div className={styles.container}>
         {pages.map(p => {
            return <div className={props.currentPage === p && styles.selectedPage}
               onClick={(e) => { props.onPageChanged(p); }}>{p}</div>
         })}
      </div>
      {
         props.users.map(u => <div key={u.id} >
            <div>
               <div>
                  <img src={u.photos.small !== null ? u.photos.small :  userPhoto} className={styles.userPhoto} />
               </div>
               <div>
                  {u.followed
                     ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                     : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
               </div>
            </div>
            <div>
               <div>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </div>
               <div>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
               </div>
            </div>
         </div>
         )
      }
   </div>
}

export default Users;