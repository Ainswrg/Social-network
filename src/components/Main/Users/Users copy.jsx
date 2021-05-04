// // import * as axios from 'axios';
// import React from 'react';
// import styles from './Users.module.css';
// import userPhoto from '../../../img/avatar.png'


// let Usersc = (props) => {

//    let getUsers = () => {
//       if (props.users.length === 0) {

//          axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            
//                props.setUsers(response.data.items)
//             });
   
//       }
//    }

//    return (
//       <div> 
//          <button onClick={getUsers}>Get Users</button>
//          {
//          props.users.map(u => <div key={u.id}>
//             <div>
//                <div>
//                   <img src={u.photos.small !== null ? u.photos.small : u.photos.small = userPhoto} className={styles.userPhoto} />
//                </div>
//                <div>
//                   {u.followed
//                      ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
//                      : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
//                </div>
//             </div>
//             <div>
//                <div>
//                   <div>{u.name}</div>
//                   <div>{u.status}</div>
//                </div>
//                <div>
//                   <div>{'u.location.country'}</div>
//                   <div>{'u.location.city'}</div>
//                </div>
//             </div>
//          </div>)
//       }
//       </div>
//    )
// }

// export default Usersc;
