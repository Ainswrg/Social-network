import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import avatar from "../../assets/img/avatar.png";
import { Avatar } from "../Styles";

const Header = ({isAuth, login, logout, profile}) => {
   return (
      <header className={s.header}>
         {/* <img src={logo} alt="logo"></img> */}
         <div className={s.loginBlock}>
            <div className={s.ava}>
               {isAuth ? (
                  <div className={s.auth}>
                     <Avatar src={profile ? profile.photos.small : avatar}  alt="logo" width={"2.5rem"} margin={"0 auto"}/>
                     {isAuth ? (
                        <NavLink to={"/profile"}>{login}</NavLink>
                     ) : null}
                     <button className={s.logout} onClick={logout}>
                        log&nbsp;out
                     </button>
                  </div>
               ) : (
                  <div className={s.auth}>
                     <NavLink to={"/login"}>Log&nbsp;in</NavLink>
                  </div>
               )}
            </div>
         </div>
      </header>
   );
};

export default Header;
