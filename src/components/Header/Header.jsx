import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import avatar from '../../assets/img/avatar.png';

const Header = (props) => {
   return (
      <header className={s.header}>
         <img
            src="https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png"
            alt="logo"
         ></img>
         <div className={s.loginBlock}>
            <div className={s.ava}>
               {props.profile 
                  ? <img
                     src={props.profile.photos.small}
                     className={s.logo}
                     alt="logo"/> 
                  : <img 
                        src={avatar}
                        className={s.logo}
                        alt="logo" />}
            </div>
            {props.isAuth 
               ? <NavLink to={"/profile"}>{props.login}</NavLink>
               : <NavLink to={"/login"}>Login</NavLink>}
         </div>
      </header>
   );
};

export default Header;
