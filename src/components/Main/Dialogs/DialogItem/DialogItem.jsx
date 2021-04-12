import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

const DialogItem = (props) => {
   let path = '/dialogs/' + props.id;

   return (
      <div className={s.dialog}>
         <div className={s.image}>
            <img src="https://cdn3.iconfinder.com/data/icons/network-communication-vol-3-1/48/111-512.png" alt="logo" className={s.avatar} />
         </div>
         <div className={s.navlink}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
         </div>
      </div>
   )
}

export default DialogItem;