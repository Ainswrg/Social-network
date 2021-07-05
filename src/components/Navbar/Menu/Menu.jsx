import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";

const Menu = (props) => {

   return (
      <div className={s.items}>
         <div>
            <NavLink to={props.id} activeClassName={s.active}>{props.name}</NavLink>
         </div>
      </div>
   );
};

export default Menu;
