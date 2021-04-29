import React from 'react';
import styles from './Users.module.css';


let Users = (props) => {
debugger
   if (props.users.length === 0) {
      props.setUsers([
            {
               id: 1, photoUrl: 'https://www.vokrug.tv/pic/person/6/b/f/a/6bfa676557cf4f20d0b2efa7f49cc796.jpg',
               followed: false, fullName: 'Semen', status: 'im super', location: { city: 'Moscow', country: 'Russian' }
            },
            {
               id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Andrew_Garfield_Comic-Con_2011_%28Straighten_Crop%29.jpg/170px-Andrew_Garfield_Comic-Con_2011_%28Straighten_Crop%29.jpg',
               followed: true, fullName: 'Andrew', status: 'im a boss', location: { city: 'Minsk', country: 'Belarus' }
            },
            {
               id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
               followed: false, fullName: 'Dmitri', status: 'im a boss to', location: { city: 'Kiev', country: 'Ukrain' }
            },
            {
               id: 4, photoUrl: 'https://image.winudf.com/v2/image1/Y29tLnNlbGZpZS5pdmFudXJnYW50X3NjcmVlbl8wXzE2MDYzOTcyMjhfMDcy/screen-0.jpg?fakeurl=1&type=.jpg',
               followed: true, fullName: 'Ivan', status: 'im super too', location: { city: 'Saint-Petersburg', country: 'Russian' }
            },
         ]
      )
   }
debugger
   return (
      <div> {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={u.photoUrl} className={styles.userPhoto} />
               </div>
               <div>
                  {u.followed
                     ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                     : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
               </div>
            </span>
            <span>
               <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
               </span>
            </span>
         </div>)
      }
      </div>
   )
}

export default Users;
