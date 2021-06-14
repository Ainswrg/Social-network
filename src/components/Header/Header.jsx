import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import avatar from "../../assets/img/avatar.png";
import logo from "../../assets/img/logo.png";

const Header = ({isAuth, login, logout, profile}) => {
   return (
      <header className={s.header}>
         <img src={logo} alt="logo"></img>
         <div className={s.loginBlock}>
            <div className={s.ava}>
               {isAuth ? (
                  <div className={s.auth}>
                     <img src={profile ? profile.photos.small : avatar} className={s.logo} alt="logo" />
                     {isAuth ? (
                        <NavLink to={"/profile"}>{login}</NavLink>
                     ) : null}
                     <button className={s.logout} onClick={logout}>
                        log out
                     </button>
                  </div>
               ) : (
                  <div className={s.auth}>
                     <NavLink to={"/login"}>Log in</NavLink>
                  </div>
               )}
            </div>
         </div>
      </header>
   );
};

export default Header;
