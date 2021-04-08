import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';

const Friends = (props) => {
   let path = '/dialogs/';
   return (
      <div className={s.friends}>
         <div className={s.title}>Friends</div>
         <div className={s.items}>
            <div className={s.item}>
               <img src="https://cdn2.iconfinder.com/data/icons/office-square-flat-vol-1/100/avatar__male__student__user_-512.png" alt="logo" className={s.imgs} />
               <div className={s.userName}><NavLink to={path + 2} activeClassName={s.active}>Anya</NavLink></div>
            </div>
            <div className={s.item}>
               <img src="https://ssl.gstatic.com/images/branding/product/1x/avatar_square_blue_512dp.png" alt="logo" className={s.imgs} />
               <div className={s.userName}><NavLink to={path + 6} activeClassName={s.active}> Nastya</NavLink></div>
            </div>
            <div className={s.item}>
               <img src="https://cdn0.iconfinder.com/data/icons/human-diversity-avatars-color/64/human-avatar-user-ui-account-square-512.png" alt="logo" className={s.imgs} />
               <div className={s.userName}><NavLink to={path + 1} activeClassName={s.active}> Tima</NavLink></div>
            </div>
         </div>
      </div>
   )
}

export default Friends;