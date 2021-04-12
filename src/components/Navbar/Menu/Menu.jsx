import { NavLink } from 'react-router-dom';
import s from './Menu.module.css';

const Menu = () => {
   return (
      <div className={s.items}>
         <div>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
         </div>
         <div>
            <NavLink to="/dialogs" activeClassName={s.active}>Message</NavLink>
         </div>
         <div>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
         </div>
         <div>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
         </div>
         <div>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
         </div>
      </div>
   )
}

export default Menu;